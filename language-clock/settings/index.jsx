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

import {
  german,
  french,
  ukrainian,
  latin,
  english,
  hungarian,
  spanish,
  italian,
  esperanto,
  chinese,
  greek,
  hawaiian,
} from "../common/constants";

registerSettingsPage(({ settings }) => (
  <Page>
    <Section
      title={
        <Text bold align="center">
          Language Clock Settings
        </Text>
      }
    >
      <ColorSelect
        settingsKey="color"
        colors={[
          { color: "aqua" },
          { color: "red" },
          { color: "gold" },
          { color: "aquamarine" },
          { color: "deepskyblue" },
          { color: "plum" },
        ]}
      />
      <Select
        label={`Select Language`}
        settingsKey="languageSelection"
        options={[
          { name: hungarian }, 
          { name: english }, 
          { name: french }, 
          { name: spanish }, 
          { name: german }, 
          { name: italian }, 
          { name: esperanto },
          { name: chinese }, 
          { name: ukrainian }, 
          { name: greek }, 
          { name: hawaiian }, 
          { name: latin }]}
      />
    </Section>
  </Page>
));
