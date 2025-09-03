let number = 9 / 0;
console.log(number);

function m1() {
    console.log('m1 function..');
    m2();
}

function m2() {
    console.log('m2 function..');
    try {
        m3();
    }
    catch (error) {
        console.log('something went wrong..');
    }
    finally {
        console.log('close the connection');
    }

}

function m3() {
    console.log('m3 function..');
    /*     try {
            throw new Error('some error');
        }
        catch (error) {
            console.log('something went wrong..');
        } */

}

m1();
console.log('BYE!!!!!');