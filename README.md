# ledrun
Blink a led to show that program is running on Raspberry PI with Node.js using pigpio

## Basic Usage

```javascript
"use strict";

// Require package
var LedRun = require('ledrun');

// Define a GPIO number that led is connected on Raspberry PI
var ledRunPin = 26;

// Initialize package with led pin
var ledRun = new LedRun(ledRunPin);

// Start blink each 150ms
ledRun.start(150);

```
