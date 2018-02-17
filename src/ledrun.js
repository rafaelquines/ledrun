"use strict";
var isRpi = require('detect-rpi');

var Gpio = !isRpi() ? require('@rafaelquines/pigpio-mock').Gpio : require('pigpio').Gpio;

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