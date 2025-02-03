/*
 * MIT License
 *
 * Copyright (c) 2025 Joshua Horvath
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import clock from "clock";
import * as document from "document";
import { today as activity } from "user-activity";
import { me as appbit } from "appbit";
import { battery } from "power";
import * as simpleSettings from "./simple/device-settings";
import { preferences } from "user-settings";
import { getLanguage } from "./languages";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> elements
const stepCountLabel = document.getElementById("stepCountLabel");
const stepsIcon = document.getElementById("stepsIcon");
const batteryLabel = document.getElementById("batteryLabel");
const batteryIcon = document.getElementById("batteryIcon");
const clockLabel = document.getElementById("clockLabel");
const clockbox = document.getElementById("clockbox");
const amPmLabel = document.getElementById("amPmLabel");
const languageHourLabel = document.getElementById("languageHourLabel");
const languageMinuteLabel = document.getElementById("languageMinuteLabel");

let languageNums = [];

/**
 * Get and process settings changes.
 * @param {*} data 
 * @returns 
 */
function settingsCallback(data) {
  if (!data) {
    return;
  }

  if (data.color) {
    stepCountLabel.style.fill = data.color;
    stepsIcon.style.fill = data.color;
    batteryLabel.style.fill = data.color;
    batteryIcon.style.fill = data.color;
    clockbox.style.fill = data.color;
    languageHourLabel.style.fill = data.color;
    languageMinuteLabel.style.fill = data.color;
  }

  if (data.languageSelection) {
    console.log(data.languageSelection);
    languageNums = getLanguage(data.languageSelection);
  }
}
simpleSettings.initialize(settingsCallback);

/**
 * Update the display of clock values.
 * @param {*} evt 
 */
clock.ontick = (evt) => {
  // handle case of user permission for step counts is not there
  if (appbit.permissions.granted("access_activity")) {
    stepCountLabel.text = getSteps().formatted;
  } else {
    stepCountLabel.text = "-----";
  }

  // get time information from API
  let todayDate = evt.date;
  let rawHours = todayDate.getHours();

  let hours;
  let languageHours;
  if (preferences.clockDisplay === "12h") {
    // 12 hour format
    hours = rawHours % 12 || 12;
    languageHours = hours;
  } else {
    // 24 hour format
    hours = zeroPad(rawHours);
    languageHours = rawHours;
  }

  let mins = todayDate.getMinutes();
  let displayMins = zeroPad(mins);

  // display time on main clock
  clockLabel.text = `${hours}:${displayMins}`;

  // AM / PM indicator 
  amPmLabel.text = rawHours >= 12 ? "PM" : "AM";

  // guard against cases where value of undefined may display
  if (languageNums.length != 0) {
    // display words in the selected langauge for current time
    languageHourLabel.text = `${languageNums[languageHours]}:`;
    languageMinuteLabel.text = `${languageNums[mins]}`;
  }

  updateBattery();
};

/**
 * Front appends a zero to an integer if less than ten.
 * @param {*} i 
 * @returns 
 */
function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/**
 * Gets and formats user step count for the day.
 * @returns 
 */
function getSteps() {
  let val = activity.adjusted.steps || 0;
  return {
    raw: val,
    formatted:
      val > 999
        ? `${Math.floor(val / 1000)},${("00" + (val % 1000)).slice(-3)}`
        : val,
  };
}

/**
 * Update the displayed battery level. 
 * @param {*} charger 
 * @param {*} evt 
 */
battery.onchange = (charger, evt) => {
  updateBattery();
};

/**
 * Updates the battery battery icon and label.
 */
function updateBattery() {
  updateBatteryLabel();
  updateBatteryIcon();
}

/**
 * Updates the battery lable GUI for battery percentage. 
 */
function updateBatteryLabel() {
  let percentSign = "&#x25";
  batteryLabel.text = battery.chargeLevel + percentSign;
}

/**
 * Updates what battery icon is displayed. 
 */
function updateBatteryIcon() {
  const minFull = 70;
  const minHalf = 30;
  
  if (battery.charging) {
    batteryIcon.image = "battery-charging.png"
  } else if (battery.chargeLevel > minFull) {
    batteryIcon.image = "battery-full.png"
  } else if (battery.chargeLevel < minFull && battery.chargeLevel > minHalf) {
    batteryIcon.image = "battery-half.png"
  } else if (battery.chargeLevel < minHalf) {
    batteryIcon.image = "battery-low.png"
  }
}

/**
 * Array of Hungarian words for integers displayed on the clock. 
 */
const hungarianNums = [
  "Nulla",
  "Egy",
  "Kettő",
  "Három",
  "Négy",
  "Öt",
  "Hat",
  "Hét",
  "Nyolc",
  "Kilenc",
  "Tíz",
  "Tizenegy",
  "Tizenkét",
  "Tizenhárom",
  "Tizennégy",
  "Tizenöt",
  "Tizenhat",
  "Tizenhét",
  "Tizennyolc",
  "Tizenkilenc",
  "Húsz",
  "Huszonegy",
  "Húszonkettő",
  "Huszonhárom",
  "Huszonnégy",
  "Huszonöt",
  "Huszonhat",
  "Huszonhét",
  "Huszonnyolc",
  "Huszonkilenc",
  "Harminc",
  "Harmincegy",
  "Harminckettő",
  "Harminchárom",
  "Harmincnégy",
  "Harmincöt",
  "Harminchat",
  "Harminchét",
  "Harmincnyolc",
  "Harminckilenc",
  "Negyven",
  "Negyvenegy",
  "Negyvenkét",
  "Negyvenhárom",
  "Negyvennégy",
  "Negyvenöt",
  "Negyvenhat",
  "Negyvenhét",
  "Negyvennyolc",
  "Negyvenkilenc",
  "Ötven",
  "Ötvenegy",
  "Ötvenkét",
  "Ötvenhárom",
  "Ötvennégy",
  "Ötvenöt",
  "Ötvenhat",
  "Ötvenhét",
  "Ötvennyolc",
  "Ötvenkilenc",
  "Hatvan",
];
