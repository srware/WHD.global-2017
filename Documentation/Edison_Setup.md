# Cloud.Community Hackathon

## Setting Up The Intel® Edison

At this point you should have the following:

* Intel® Edison Module with Arduino Breakout Board
* Grove Starter Kit

You should also have completed the following:

* If using **Windows** you should have the necessary Edison drivers installed.
* You should have your favourite serial client installed (e.g. Putty).
* You should have the Intel® XDK IDE installed so you can begin development.

> <strong>If you have not completed any of the above please follow the steps outlined [here](Dev_Setup.md)</strong>

## Unboxing
Please follow the steps below to assemble and connect your Edison.

* [Assembling Your Edison](https://software.intel.com/en-us/node/628221)
* [Connecting the Grove Base Shield](http://ssg-drd-iot.github.io/getting-started-guides/docs/sensor_examples/grove_starter_kit/details-base_shield.html)
* Connecting to the Edison Via Serial (login details below)
    - [Windows](https://software.intel.com/en-us/setting-up-serial-terminal-on-system-with-windows)
    - [Mac](https://software.intel.com/en-us/setting-up-serial-terminal-on-system-with-mac-os-x)
    - [Linux](https://software.intel.com/en-us/setting-up-serial-terminal-on-system-with-linux)

> Edison Login:    <strong>Username:</strong> root  <strong>Password:</strong> hackfest

You should now have your Edison assembled and be able to access the OS through serial.

## WiFi
* [Connect Your Edison To WiFi](https://software.intel.com/en-us/connecting-your-intel-edison-board-using-wifi) (Make a note of the IP address for future reference)

> <strong>WiFi:</strong> Please ensure your development machine is on the same network!

## Test Your IDE
You are now ready to begin developing. We would recommend starting with a simple example to make sure your IDE is communicating with your Edison correctly.
* [XDK (Node.js)](http://ssg-drd-iot.github.io/getting-started-guides/docs/ide_setup/xdk/sample_project/index.html)
