// In builder pattern first we need to create private constructor and in builder pattern each method will return the current class object so return type will be the class name and 'this' keyword will use with return.

export class AmazonShop {

    // private constructor

    private constructor() { }

    login(): AmazonShop {
        console.log('login to the amazon shop');
        return this;
    }

    search(): AmazonShop {
        console.log('search the product inside of amazon shop');
        return this;
    }

    addToCart(): AmazonShop {
        console.log('product added into the cart');
        return this;
    }

    payment(): AmazonShop {
        console.log('making payment using CC');
        return this;
    }

    logout(): AmazonShop {
        console.log('logout to the amazon shop');
        return this;
    }

    // this method will help to create the object outside of the class.

    static builder(): AmazonShop {
        return new AmazonShop();
    }

    build(): void {
        console.log('shoping is done..');
    }
}

AmazonShop.builder()
    .login()
    .search()
    .addToCart()
    .payment()
    .logout()
    .build();


// advantage of builder pattern is to define the journey     