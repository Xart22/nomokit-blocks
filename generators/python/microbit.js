/**
 * Visual Blocks Language
 *
 * Copyright 2021 openblock.cc.
 * https://github.com/openblockcc/openblock-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

goog.provide("Blockly.Python.microbit");

goog.require("Blockly.Python");

Blockly.Python["microbit_pin_setDigitalOutput"] = function (block) {
  var pin = block.getFieldValue("PIN");
  var level =
    Blockly.Python.valueToCode(
      block,
      "LEVEL",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "LOW";

  var code = "pin" + pin + ".write_digital(" + level + ")\n";
  return code;
};

Blockly.Python["microbit_pin_menu_level"] = function (block) {
  var code = block.getFieldValue("level") || "0";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_pin_setPwmOutput"] = function (block) {
  var pin = block.getFieldValue("PIN");
  var out =
    Blockly.Python.valueToCode(
      block,
      "OUT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";

  var code = "pin" + pin + ".write_analog(" + out + ")\n";
  return code;
};

Blockly.Python["microbit_pin_readDigitalPin"] = function (block) {
  var pin = block.getFieldValue("PIN") || "0";
  var code = "pin" + pin + ".read_digital()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_pin_readAnalogPin"] = function (block) {
  var pin = block.getFieldValue("PIN") || "0";
  var code = "pin" + pin + ".read_analog()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_pin_pinTouched"] = function (block) {
  var pin = block.getFieldValue("PIN") || "0";
  var code = "pin" + pin + ".is_touched()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_display_showImage"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC) ||
    "0";

  arg0 = arg0.replace(/1/g, "9");
  arg0 =
    arg0.slice(0, 5) +
    ":" +
    arg0.slice(5, 10) +
    ":" +
    arg0.slice(10, 15) +
    ":" +
    arg0.slice(15, 20) +
    ":" +
    arg0.slice(20, 25);
  var code = "display.show(Image('" + arg0 + "'))\n";
  return code;
};

Blockly.Python["microbit_display_showArrow"] = function (block) {
  var arg0 = block.getFieldValue("ARROW");

  var code = "display.show(Image('" + arg0 + "'))\n";
  return code;
};

Blockly.Python["microbit_display_showImageUntil"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC) ||
    "0";
  var arg1 =
    Blockly.Python.valueToCode(block, "TIME", Blockly.Python.ORDER_ATOMIC) ||
    "0";

  arg0 = arg0.replace(/1/g, "9");
  arg0 =
    arg0.slice(0, 5) +
    ":" +
    arg0.slice(5, 10) +
    ":" +
    arg0.slice(10, 15) +
    ":" +
    arg0.slice(15, 20) +
    ":" +
    arg0.slice(20, 25);
  var code =
    "display.show(Image('" +
    arg0 +
    "'))\n" +
    "sleep(float(" +
    arg1 +
    ") * 1000)\n" +
    "display.clear()\n";
  return code;
};

Blockly.Python["microbit_display_show"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "display.show(" + arg0 + ")\n";
  return code;
};

Blockly.Python["microbit_display_showUntilScrollDone"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "display.scroll(" + arg0 + ", wait=True, loop=False)\n";
  return code;
};

Blockly.Python["microbit_display_clearDisplay"] = function () {
  var code = "display.clear()\n";
  return code;
};

Blockly.Python["microbit_display_lightPixelAt"] = function (block) {
  var sta = block.getFieldValue("STATE");
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";

  if (sta === "off") {
    sta = 0;
  } else {
    sta = 9;
  }

  var code = "display.set_pixel(int(" + x + "), int(" + y + "), " + sta + ")\n";
  return code;
};

Blockly.Python["microbit_display_showOnPiexlbrightness"] = function (block) {
  var brt =
    Blockly.Python.valueToCode(
      block,
      "BRT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "9";
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";

  var code = "display.set_pixel(int(" + x + "), int(" + y + "), " + brt + ")\n";
  return code;
};

Blockly.Python["microbit_display_menu_ledBrightness"] = function (block) {
  var code = block.getFieldValue("ledBrightness") || "9";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_buttonIsPressed"] = function (block) {
  var key = block.getFieldValue("KEY");

  var code = "button_" + key + ".is_pressed()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_gestureIsX"] = function (block) {
  var sta = block.getFieldValue("STA");

  var code = "accelerometer.is_gesture('" + sta + "')";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_axisAcceleration"] = function (block) {
  var axis = block.getFieldValue("AXIS");

  var code = "accelerometer.get_" + axis + "()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_compassAngle"] = function () {
  var code = "compass.heading()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_compassMagneticDensity"] = function () {
  var code = "compass.get_field_strength()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_calibrateCompass"] = function () {
  var code = "compass.calibrate()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_lightLevel"] = function () {
  var code = "display.read_light_level()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_temperature"] = function () {
  var code = "temperature()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_sensor_runningTime"] = function () {
  var code = "running_time()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_wireless_openWirelessCommunication"] = function () {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.on()\n";
  return code;
};

Blockly.Python["microbit_wireless_setWirelessCommunicationGroup"] = function (
  block
) {
  Blockly.Python.imports_["radio"] = "import radio";

  var group =
    Blockly.Python.valueToCode(
      block,
      "GROUP",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "radio.config(group = " + group + ")\n";
  return code;
};

Blockly.Python["microbit_wireless_closeWirelessCommunication"] = function () {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.off()\n";
  return code;
};

Blockly.Python["microbit_wireless_resetWirelessCommunication"] = function () {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.reset()\n";
  return code;
};

Blockly.Python["microbit_wireless_sendWirelessMessage"] = function (block) {
  Blockly.Python.imports_["radio"] = "import radio";

  var msg =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "radio.send(str(" + msg + "))\n";
  return code;
};

Blockly.Python["microbit_wireless_receiveWirelessMessage"] = function () {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.receive()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_wireless_setWirelessCommunicationChannel"] = function (
  block
) {
  Blockly.Python.imports_["radio"] = "import radio";

  var ch = block.getFieldValue("CH");
  var code = "radio.config(channel = " + ch + ")\n";
  return code;
};

Blockly.Python["microbit_wireless_whenReceiveWirelessMessage"] = function (
  block
) {
  Blockly.Python.imports_["radio"] = "import radio";
  var stack = Blockly.Python.statementToCode(block, "SUBSTACK");
  var code = `while True:\n msg = radio.receive()\n  if msg:\n   ${stack}\n`;

  return code;
};
Blockly.Python["microbit_console_consolePrint"] = function (block) {
  var msg =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "print(" + msg + ")\n";
  return code;
};

Blockly.Python["microbit_music_playTone"] = function (block) {
  Blockly.Python.imports_["music"] = "import music";
  var chords = block.getFieldValue("CHORDS");
  var beats = block.getFieldValue("BEATS");
  // var code = "pin" + pin + ".write_analog(" + out + ")\n";
  var code = "music.pitch(int(" + chords + "), int(" + beats + "))\n";
  return code;
};

Blockly.Python["microbit_music_setVolume"] = function (block) {
  Blockly.Python.imports_["music"] = "import music";
  var volume =
    Blockly.Python.valueToCode(
      block,
      "VOL",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "set_volume(" + volume + ")\n";
  return code;
};

Blockly.Python["microbit_music_setTempo"] = function (block) {
  Blockly.Python.imports_["music"] = "import music";
  var tempo =
    Blockly.Python.valueToCode(
      block,
      "TEMPO",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "music.set_tempo(bpm=" + tempo + ")\n";
  return code;
};

Blockly.Python["microbit_music_playMelody"] = function (block) {
  Blockly.Python.imports_["music"] = "import music";
  var melody = block.getFieldValue("MELODY");
  var code = "music.play(music." + melody + ")\n";
  return code;
};

Blockly.Python["microbit_array_setArray"] = function (block) {
  var name =
    Blockly.Python.valueToCode(
      block,
      "VAR",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "".replaceAll("'", "");
  var value =
    Blockly.Python.valueToCode(
      block,
      "VALUE",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var type = block.getFieldValue("TYPE");
  var arrayValue = value.replaceAll("'", "").split(",");

  if (type === "string") {
    arrayValue = arrayValue.map((item) => {
      return `'${item}'`;
    });
  } else if (type === "int") {
    arrayValue = arrayValue.map((item) => {
      return parseInt(item);
    });
  } else if (type === "float") {
    arrayValue = arrayValue.map((item) => {
      return parseFloat(item);
    });
  }

  var code = `${name.replaceAll("'", "")} = [${arrayValue}]\n`;
  return code;
};

Blockly.Python["microbit_led_plot"] = function (block) {
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = `display.set_pixel(${x}, ${y}, 9)\n`;
  return code;
};

Blockly.Python["microbit_led_unplot"] = function (block) {
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = `display.set_pixel(${x}, ${y}, 0)\n`;
  return code;
};

Blockly.Python["microbit_led_getPixel"] = function (block) {
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = `display.get_pixel(${x}, ${y})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microbit_led_plotBarGraph"] = function (block) {
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";

  var serial = block.getFieldValue("SERIAL");

  Blockly.Python.customFunctions_["plotBarGraph"] = `
bar_graph_high = 0\n
bar_graph_high_last = 0\n\n
def plot_bar_graph(value, high=0, value_to_console=True):

  global bar_graph_high
  global bar_graph_high_last

  now = running_time()

  if value_to_console:
      print(value)

  if high > 0:
      bar_graph_high = high
  elif value > bar_graph_high or now - bar_graph_high_last > 10000:
      bar_graph_high = value
      bar_graph_high_last = now


  if bar_graph_high < 16 * 2.220446049250313e-16:
      bar_graph_high = 1


  v = value / bar_graph_high
  dv = 1 / 16
  k = 0

  for y in range(4, -1, -1):
      for x in range(3):
          if k > v:
              display.set_pixel(2 - x, y, 0)
              display.set_pixel(2 + x, y, 0)
          else:
              display.set_pixel(2 - x, y, 9)
              display.set_pixel(2 + x, y, 9)
          k += dv\n`;

  var code = `plot_bar_graph(${x}, ${y}, ${serial})\n`;
  return code;
};
