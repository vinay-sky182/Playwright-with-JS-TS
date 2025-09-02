/* 
pending
fulfiled - resolved -- it will be given to then()
rejected - error -- it will be given to catch()
*/

let myPromise = new Promise((resolve, reject) => {
    console.log('start the promise...');
    let success = true;
    if (success) {
        resolve('training is done!!');
    }
    else {
        reject('failed!!');
    }
});

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

// error promise:

let errorPromise = new Promise((resolve, reject) => {
    reject('oopss...something went wrong...');
});

errorPromise.catch(error => {
    console.log(error);
});

let cakePromise = new Promise((resolve, reject) => {
    console.log('start making the cake....');
    let success = true;
    if (success) {
        resolve('cake is ready');
    } else {
        reject('sorry, I was sick');
    }
});

/* 
resolve = (result) => {

} 
*/

cakePromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log(`let's have a party`);
});

// chaining promises: this function is returning a promise - resolve

function doubleAmountAfter2Seconds(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    })
}

// call the function:

doubleAmountAfter2Seconds(5).then(result => {
    console.log(`doubled amount is: ${result}`); // 10
    return doubleAmountAfter2Seconds(result);
}).then(result => {
    console.log(`one more time doubled amount is: ${result}`);
});

/* 

Promise.all is a method in JavaScript that takes an array of promises and returns a single promise.

This returned promise:
1.) Resolves when all input promises are fulfilled.
2.) Rejects immediately if any one of the input promises fails. 

*/

let promise1 = new Promise((resolve, reject) => {
    resolve('promise 1 is passed');
})
let promise2 = new Promise((resolve, reject) => {
    resolve('promise 2 is passed');
})
let promise3 = new Promise((resolve, reject) => {
    reject('promise 3 is failed');
})

Promise.all([ promise1, promise2, promise3 ])
    .then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
        console.log('failed!!');
    });
