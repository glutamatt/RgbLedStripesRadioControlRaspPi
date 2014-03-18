RgbLedStripesRadioControlRaspPi
===============================

Radio Frequence Control Rgb Led Stripes From Raspberry Pi

My modest DIY project : make a rasp able to control rgb led stripes with rf emitter.

Discussion on [pilight Forum](http://forum.pilight.org/Thread-RGB-rf-Led-Controller)

ingredients :
 - a rasberry pi
 - a rf emitter (http://www.ebay.fr/itm/1pcs-RF-transmitter-and-receiver-kit-for-Arduino-project-433Mhz-/370685120131)
 - a rgb RF led controller [image] http://img.dxcdn.com/productimages/sku_252478_1_small.jpg
 - a led stripe 
 - some jumper wires


pilight http://www.pilight.org/ must be up and running on the Pi.

Node.js serve the ui and handle user changes. Socket.io is required.

txt files are just here to work on the learning process and are not necessary : they're parsed to make the json file once

![Yeah](https://raw.github.com/glutamatt/RgbLedStripesRadioControlRaspPi/master/lab_test.jpg "Ok it would be better in the dark ....")
