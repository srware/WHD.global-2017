# Cloud.Community Hackathon

## Setting Up Your Development Machine

On the day you will be receiving an [Intel® Edison Module](http://www.intel.co.uk/content/www/uk/en/do-it-yourself/edison.html) and breakout board along with a [Grove Starter Kit Plus](http://www.seeedstudio.com/depot/Grove-starter-kit-plus-Intel-IoT-Edition-for-Intel-Galileo-Gen-2-and-Edison-p-1978.html). Follow the instructions below to install the required drivers and IDE on your devleopment machine.

* If you are going to be using a Windows machine please install the following drivers for communicating with the Edison.
    - [Intel® Edison Drivers](http://downloadmirror.intel.com/24909/eng/IntelEdisonDriverSetup1.2.1.exe)
    - [FTDI Serial Driver](http://www.ftdichip.com/Drivers/CDM/CDM%20v2.10.00%20WHQL%20Certified.exe) (Right-click and 'Run as administrator')

* You will require a serial client to interact with the Edison operating system. For Linux and Mac systems we would recommend using 'screen'. For Windows you can use [Putty](http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe).

* The tutorials in this repository are written using [Node.js](https://nodejs.org/) although other programming languages can be used. We recommend you install the Intel® XDK IDE for Node.JS development on the Edison.
    - [Javascript (Node.js)](https://software.intel.com/en-us/intel-xdk) [You do not need to install Bonjour, connecting to the Edison manually is recommended]
    - Python - The Edison operating system has python support built-in. You can write scripts on the device itself using 'vi' over SSH or serial.

> The Edison you receive on the day will be updated with the latest firmware and will be pre-configured so you can get started as quickly as possible.
