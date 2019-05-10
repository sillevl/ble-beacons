let myCharacteristic = null;

window.addEventListener('load', () => {
  console.log('Staring application')

  let button = document.getElementById('connect')
  button.addEventListener('click', connect)

  let stopButton = document.getElementById('stop')
  stopButton.addEventListener('click', onStopButtonClick)
})

function handleCharacteristicValueChanged (event) {
  console.log('event !!!')
  var value = event.target.value
  console.log('Received ' + value)
}

function onStopButtonClick() {
  if (myCharacteristic) {
    myCharacteristic.stopNotifications()
      .then(_ => {
        console.log('> Notifications stopped')
        myCharacteristic.removeEventListener('characteristicvaluechanged',
          handleNotifications)
      })
      .catch(error => {
        console.log('Argh! ' + error)
      })
  }
}

function connect() {
  navigator.bluetooth.requestDevice({
    filters: [{
      // namePrefix: 'Disco'
      services: [
        '00000000-0001-11e1-9ab4-0002a5d5c51b'
      ]
    }]
    // acceptAllDevices: true,
    // optionalServices: ['00000000-0001-11e1-9ab4-0002a5d5c51b']
  })
    .then(device => {
      // Human-readable name of the device.
      console.log(device.name)

      // Attempts to connect to remote GATT Server.
      return device.gatt.connect()
    })
    .then(server => {
      return server.getPrimaryService('00000000-0001-11e1-9ab4-0002a5d5c51b')
    })
    .then(service => {
      return service.getCharacteristic('00000100-0001-11e1-ac36-0002a5d5c51b')
    })
    .then(characteristic => {
      myCharacteristic = characteristic;
      return myCharacteristic.startNotifications().then(_ => {
        console.log('> Notifications started')
        myCharacteristic.addEventListener('characteristicvaluechanged',
          handleCharacteristicValueChanged)
      })
    })
    .catch(error => { console.log(error) })
}