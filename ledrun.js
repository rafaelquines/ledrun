"use strict";

if ((process.env.NODE_ENV != "development") &&
    (process.env.NODE_ENV != "production")) {
    console.error("Invalid environment");
    console.error("Expected environment: development or production");
    console.error("Current environment: ", process.env.NODE_ENV);
    process.exit(1);
}

var Gpio = process.env.NODE_ENV === 'development' ? require('@rafaelquines/pigpio-mock').Gpio : require('pigpio').Gpio;

function LedRun(pin) {

    this._pin = pin;
    this._led = new Gpio(pin, { mode: Gpio.OUTPUT });
    this._interval = null;
}
LedRun.prototype.start = function(blinkInterval) {
    var that = this;
    this._interval = setInterval(function() {
        that._led.digitalWrite(that._led.digitalRead() ^ 1); // 1 = on, 0 = off :)
    }, blinkInterval);
};

LedRun.prototype.stop = function() {
    this._led.digitalWrite(0);
    clearInterval(this._interval);
};

module.exports = LedRun;