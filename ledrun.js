"use strict";
var Gpio = require('onoff').Gpio;
function LedRun(pin) {
    this._pin = pin;
    this._led = new Gpio(pin, 'out');
    this._interval = null;
}
LedRun.prototype.start = function(blinkInterval) {
    var that = this;
    this._interval = setInterval(function () {
        that._led.writeSync(that._led.readSync() ^ 1); // 1 = on, 0 = off :)
    }, blinkInterval);
};

LedRun.prototype.stop = function() {
    this._led.writeSync(0);
    clearInterval(this._interval);
};

module.exports = LedRun;
