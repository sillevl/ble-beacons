# Motion classification

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Web Bluetooth

Web application using Bluetooth API

https://caniuse.com/#feat=web-bluetooth


https://googlechrome.github.io/samples/web-bluetooth/notifications.html?service=00000000-0001-11e1-9ab4-0002a5d5c51b&characteristic=00000400-0001-11e1-ac36-0002a5d5c51b


## ST Sensortile

Evaluation Kit: https://www.st.com/en/evaluation-tools/steval-stlkt01v1.html

Getting started with the BlueST protocol and SDK: https://www.st.com/content/ccc/resource/technical/document/user_manual/group1/ad/29/54/26/6a/ec/4c/8e/DM00550659/files/DM00550659.pdf/jcr:content/translations/en.DM00550659.pdf

## ST Sensortile Bluetooth

Service: `00000000-0001-11e1-9ab4-0002a5d5c51b`

Characteristics:

* Acc - Gyro - Mag: `00e00000-0001-11e1-ac36-0002a5d5c51b`
* MEMS sensor fusion compact: `00000100-0001-11e1-ac36-0002a5d5c51b`
* Battery: `00020000-0001-11e1-ac36-0002a5d5c51b` ???????????

Sample project using similar sensor/firmware: https://github.com/blueappio/qbtrainer/blob/de956457419ff3160c4866ecb24ab641eed7a3f2/src/app/services/quarterbackTrainer%20.js

## Ionic

Bluetooth API Ionic: https://ionicframework.com/docs/v3/native/ble/
Cordova bluetooth plugin: https://github.com/don/cordova-plugin-ble-central


## automatic reconnect

https://googlechrome.github.io/samples/web-bluetooth/automatic-reconnect.html