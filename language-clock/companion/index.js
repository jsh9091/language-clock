import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me as companion } from "companion";

let KEY_COLOR = "color";
let LANGUAGE_SELECTION = "languageSelection";

// Settings have been changed
settingsStorage.addEventListener("change", (evt) => {

  let newValue = "";
  if (evt.key == LANGUAGE_SELECTION) {
    let temp = JSON.parse(evt.newValue).values[0].name;
    newValue = '"' + temp + '"';
  } else if (evt.key == KEY_COLOR) {
    newValue = evt.newValue;
  }

  sendValue(evt.key, newValue);
});

// Settings were changed while the companion was not running
if (companion.launchReasons.settingsChanged) { // TODO review
  // Send the value of the setting
  sendValue(KEY_COLOR, settingsStorage.getItem(KEY_COLOR));
  sendValue(LANGUAGE_SELECTION, settingsStorage.getItem(LANGUAGE_SELECTION));
}

function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}
function sendSettingData(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log("No peerSocket connection");
  }
}