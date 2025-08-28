// sync - async activities

/* 
1. startCoffeeMachine -- 5sec.
2. boilWater -- 3sec.
3. grindCoffeeBeans -- 4sec.
4. brewCoffee -- 6sec.
5. pourInCup -- 2sec.
6. serveCoffee -- 1sec.
*/

function startMachine(callback) {
    // console.log('Starting Coffee Machine...');

    setTimeout(() => {
        console.log('Coffee Machine Started.');
        callback();
    }, 5000);
}

function boilWater(callback) {
    // console.log('Boiling Water...');

    setTimeout(() => {
        console.log('Water Boiled.');
        callback();
    }, 3000);
}

function grindCoffeeBeans(callback) {
    // console.log('Grinding Coffee Beans...');

    setTimeout(() => {
        console.log('Coffee Beans Ground.');
        callback();
    }, 4000);
}

function brewCoffee(callback) {
    // console.log('Brewing Coffee...');

    setTimeout(() => {
        console.log('Coffee Brewed.');
        callback();
    }, 6000);
}

function pourInCup(callback) {
    // console.log('Pouring Coffee in Cup...');

    setTimeout(() => {
        console.log('Coffee Poured in Cup.');
        callback();
    }, 2000);
}

function serveCoffee() {
    // console.log('Serving Coffee...');

    setTimeout(() => {
        console.log('Coffee Served. Enjoy your coffee!');
    }, 1000);
}

// Calling the function

/* startMachine(() => { });
boilWater(() => { });
grindCoffeeBeans(() => { });
brewCoffee(() => { });
pourInCup(() => { });
serveCoffee(() => { }); */



// Callback hell - Pyramid of doom

startMachine(() => {
    boilWater(() => {
        grindCoffeeBeans(() => {
            brewCoffee(() => {
                pourInCup(() => {
                    serveCoffee();
                });
            });
        });
    });
});

// to solve callback hell - Promises, Async - Await

console.log("-------------------------------------------------------------------------");