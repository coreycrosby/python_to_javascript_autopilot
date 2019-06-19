// 1.
const apples = 14;
console.log(apples);

console.log(`I have ${apples} apples.`)

// 2.
const materials = ['woods', 'metal', 'stone'];
const words = {
    'elephant': "The world's largest land mamma.",
    'school': "A place of learning.",
    'ice cream': 'A delicious milk-based dessert',
}

// 3.
let num = 16;

if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num == 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log(`${num} must be less than 10.`);
}

// 4.
for (let index =0; index < 10; index++){
    console.log("Doing the same thing over and over.");
}

// 5.
const base = 5
for (let index =0; index <20; index++) {
    console.log(base + index);
}

// 6.
total = 0
for (let index=0; index < 100; index++) {
    total+=index
}
console.log(total);

// 7.
for (height = 3; height < 15; height++) {
    if (height > 9) {
        console.log("You can get on the rollercoaster!")
    } else {
        console.log("You are too short to ride this rollercoaster")
    }
}

// 8.
const containers = ['purse', 'wallet', 'backpack'];
for (let index =0; index < containers.length; index++) {
    console.log(containers[index])
}

// 9.
function helloWorld() {
    return ("Hello world!");
}

helloWorld();

// 10.
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

amount = add(5, 7);
console.log(amount)