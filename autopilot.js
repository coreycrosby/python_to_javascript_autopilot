function getNewCar() {
    return {
        'city': 'Toronto',
        'passengers': 0,
        'gas' : 100,
    }
}

function addCar(cars, newCar) {
    cars.push(newCar);
    return (`Adding new car to fleet. Fleet size is now ${cars.length}`);
}

function pickUpPassenger(car) {
    car['passengers'] ++;
    car['gas'] -= 10;
    return `Picked up passenger. Car now has ${car['passengers']} passengers.`;
}

function getDestination(car) {
    if (car['city'] == 'Toronto') {
        return 'Mississauga';
    } 
    else if (car['city'] == 'Mississauga') {
        return 'London';
    } 
    else if (car['city'] == 'London') {
        return 'Toronto';
    }
}

function fillUpGas(car) {
    old_gas = car['gas'];
    car['gas'] = 100;
    return `Filled up to ${getGasDisplay(car['gas'])} on gas from ${getGasDisplay(old_gas)}.`;
}

function getGasDisplay(gas_amount) {
    return `${gas_amount}%`;
}

function drive(car, city_distance) {
    if (car['gas'] < city_distance) {
        return fillUpGas(car);
    } 
    car['city'] = getDestination(car);
    car['gas'] -= city_distance;
    return `Drove to ${car['city']}. Remaining gas: ${getGasDisplay(car['gas'])}.`;
}

function dropOffPassengers(car) {
    previous_passengers = car['passengers'];
    car['passengers'] = 0;
    return `Dropped off ${previous_passengers} passengers.`;
}

function act(car) {
    let distance_between_cities = 50;

    if (car['gas'] < 20) {
      return fillUpGas(car);
    }
    else if (car['passengers'] < 3) {
      return pickUpPassenger(car);
    }
    else if (car['gas'] < distance_between_cities) {
      return fillUpGas(car);
    }

    drove_to = drive(car, distance_between_cities);
    passengers_dropped = dropOffPassengers(car);
    return `${drove_to} ${passengers_dropped}`;
  }

function commandFleet(cars) {
    for (let i = 0; i < cars.length; i++) {
        action = act(cars[i]);
        console.log(`Car ${i}: ${action}`);
    }
}

function addOneCarPerDay(cars, num_days) {
    for (let day = 0; day < num_days; day++) {
        new_car = getNewCar();
        console.log(addCar(cars, new_car));
        commandFleet(cars);
        console.log('---------')
    }
}

cars = []
addOneCarPerDay(cars, 10);
