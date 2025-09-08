// Promise concept in JavaScript:

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
    console.log("-------------------------------------------------------------------------");
}).catch(error => {
    console.log(error);
    console.log("-------------------------------------------------------------------------");
})


// error promise:---------------------------------------------------------------------------

let errorPromise = new Promise((resolve, reject) => {
    reject('oopss...something went wrong...');
});

errorPromise.catch(error => {
    console.log(error);
    console.log("-------------------------------------------------------------------------");
});

//---------------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------------

cakePromise.then(result => {
    console.log(result);
    console.log("-------------------------------------------------------------------------");
}).catch(error => {
    console.log(error);
    console.log("-------------------------------------------------------------------------");
}).finally(() => {
    console.log(`let's have a party`);
    console.log("-------------------------------------------------------------------------");
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
    console.log("-------------------------------------------------------------------------");
    return doubleAmountAfter2Seconds(result);
}).then(result => {
    console.log(`one more time doubled amount is: ${result}`);
    console.log("-------------------------------------------------------------------------");
});

/* 
1.) Ye function doubleAmountAfter2Seconds(x) ko jab bhi call kiya jaata hai, wo Promise object return karta hai us code ko jo us function ko call karta hai.
2.) doubleAmountAfter2Seconds(5) call hua.
3.) Ye ek Promise return karega.
4.) then(...) us Promise ke result ka intezaar karega.
5.) Jab 2 second baad result aayega (yani 5 * 2 = 10), tab then ke andar wala code chalega. 
*/

//--------------------------------------------------------------------------------------------

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
        console.log("-------------------------------------------------------------------------");
    }).catch(error => {
        console.log(error);
        console.log("-------------------------------------------------------------------------");
        console.log('failed!!');
        console.log("-------------------------------------------------------------------------");
    });

/* 

Promise.all is a method in JavaScript that takes an array of promises and returns a single promise.

This returned promise:
1.) Resolves when all input promises are fulfilled.
2.) Rejects immediately if any one of the input promises fails. 

*/

//--------------------------------------------------------------------------------------------

const promiseOne = new Promise(function (resolve, reject) {

    // Do an async task
    // DB,cryptography, network calls

    setTimeout(function () {
        console.log(`async task is complete`);
        console.log("-------------------------------------------------------------------------");
        resolve();
    }, 1000)

})

promiseOne.then(function () {
    console.log("promise consumed");
    console.log("-------------------------------------------------------------------------");
})

//--------------------------------------------------------------------------------------------

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'admin', password: 'admin@123' })
        }
        else {
            reject('ERROR: Something went wrong!!')
        }
    }, 1000)
})


/* 
promiseTwo.then(resolve => {
    return resolve;
})
    .then(data => {
        console.log(data.username);
    })
    .catch(error => {
        console.log(error);
    }) */

// console.log("-------------------------------------------------------------------------");        

// async await main error handle nahi hoti hai isliye hum try-catch use karte hai async await ke sath.

async function consumePromiseTwo() {

    try {
        const response = await promiseTwo
        console.log(response);
        console.log("-------------------------------------------------------------------------");
    } catch (error) {
        console.log(error);
        console.log("-------------------------------------------------------------------------");
    }
}
consumePromiseTwo();


// async function getAllUsers() {

//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary').then(function (response) {
    return response.json();
})
    .then(function (data) {
        console.log(data);
        console.log("-------------------------------------------------------------------------");
    })
    .catch(function (error) {
        console.log(error);
        console.log("-------------------------------------------------------------------------");
    })