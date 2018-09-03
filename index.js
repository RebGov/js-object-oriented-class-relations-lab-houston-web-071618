let store = { drivers:[], passengers:[], trips:[] }
let driverId = 0
let passengerId = 0
let tripId = 0
// driver class
//new Driver() intialize with a name has id and name
//trips() returns all trips for a driver
// passenges() returns all passengers driver has taken
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}
//passenger class
// new passenger() intialize with a name, has id and name
//trips() all trips taken
// drivers() all drivers for passenger
class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}
//trip Class
//new trip() - intialize with a driver and passenger - has id, driverId, passengerId
// driver() associated with trip
//passenger() assicated with trip
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driverId
    this.passengerId = passengerId
    store.trips.push(this)
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}
