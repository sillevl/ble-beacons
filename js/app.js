let myCharacteristic1 = null;
let myCharacteristic2 = null;

let log1;
let log2;

window.addEventListener('load', () => {
  console.log('Staring application')

  let button1 = document.getElementById('connect1')
  button1.addEventListener('click', connect1)
  let button2 = document.getElementById('connect2')
  button2.addEventListener('click', connect2)

  let stopButton = document.getElementById('stop')
  stopButton.addEventListener('click', onStopButtonClick)

  log1 = document.getElementById("log1");
  log2 = document.getElementById("log2");

  log1.innerText = "Ready...";
  log2.innerText = "Ready...";

})

function handleCharacteristicValueChanged1 (event) {
  // console.log('event !!!')
  var value = event.target.value
  let content = [];
  for (let index = 0; index < 10; index++) {
    content.push(value.getInt16(index));
  }

  log1.innerText = content;
  // console.log('Received ' + value)
}
function handleCharacteristicValueChanged2 (event) {
  // console.log('event !!!')
  var value = event.target.value
  let content = [];
  for (let index = 0; index < 10; index++) {
    content.push(value.getInt16(index));
  }

  log2.innerText = content;
  // console.log('Received ' + value)
}

function onStopButtonClick() {
  if (myCharacteristic1) {
    myCharacteristic1.stopNotifications()
      .then(_ => {
        console.log('> Notifications stopped')
        myCharacteristic1.removeEventListener('characteristicvaluechanged',
        handleCharacteristicValueChanged1)
      })
      .catch(error => {
        console.log('Argh! ' + error)
      })
  }
  if (myCharacteristic2) {
    myCharacteristic2.stopNotifications()
      .then(_ => {
        console.log('> Notifications stopped')
        myCharacteristic2.removeEventListener('characteristicvaluechanged',
        handleCharacteristicValueChanged2)
      })
      .catch(error => {
        console.log('Argh! ' + error)
      })
  }
}

function connect1() {
  navigator.bluetooth.requestDevice({
    // filters: [{
    //   // namePrefix: 'Disco'
    //   services: [
    //     '00000000-0001-11e1-9ab4-0002a5d5c51b'
    //   ]
    // }]
    acceptAllDevices: true,
    optionalServices: ['00000000-0001-11e1-9ab4-0002a5d5c51b']
  })
    .then(device => {
      // Human-readable name of the device.
      console.log(device.name)

      // Attempts to connect to remote GATT Server.
      return device.gatt.connect()
    })
    .then(server => {
      console.log('getting primary service')
      return server.getPrimaryService('00000000-0001-11e1-9ab4-0002a5d5c51b')
    })
    .then(service => {
      console.log("getting characteristic")
      return service.getCharacteristic('00000100-0001-11e1-ac36-0002a5d5c51b')
    })
    .then(characteristic => {
      console.log("characteristiec found");
      myCharacteristic1 = characteristic;
      return myCharacteristic1.startNotifications().then(_ => {
        console.log('> Notifications started')
        myCharacteristic1.addEventListener('characteristicvaluechanged',
          handleCharacteristicValueChanged1)
      })
    })
    .catch(error => { console.log(error.message) })
}


function connect2() {
  navigator.bluetooth.requestDevice({
    // filters: [{
    //   // namePrefix: 'Disco'
    //   services: [
    //     '00000000-0001-11e1-9ab4-0002a5d5c51b'
    //   ]
    // }]
    acceptAllDevices: true,
    optionalServices: ['00000000-0001-11e1-9ab4-0002a5d5c51b']
  })
    .then(device => {
      // Human-readable name of the device.
      console.log(device.name)

      // Attempts to connect to remote GATT Server.
      return device.gatt.connect()
    })
    .then(server => {
      console.log('getting primary service')
      return server.getPrimaryService('00000000-0001-11e1-9ab4-0002a5d5c51b')
    })
    .then(service => {
      console.log("getting characteristic")
      return service.getCharacteristic('00000100-0001-11e1-ac36-0002a5d5c51b')
    })
    .then(characteristic => {
      console.log("characteristiec found");
      myCharacteristic2 = characteristic;
      return myCharacteristic2.startNotifications().then(_ => {
        console.log('> Notifications started')
        myCharacteristic2.addEventListener('characteristicvaluechanged',
          handleCharacteristicValueChanged2)
      })
    })
    .catch(error => { console.log(error.message) })
}