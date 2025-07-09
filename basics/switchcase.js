let browser = 'chrome';

switch (browser) {
    case 'chrome':
        console.log('chrome browser');
        break;
    case 'firefox':
        console.log('firefox browser');
        break;
    case 'safari':
        console.log('safari browser');
        break;
    case 'edge':
        console.log('edge browser');
        break;

    default:
        console.log('please select a valid browser');
        break;
}

/* use cases for switch case
1. cross browser logic
2. cross os/platforms: win/mac/linux
3. cross devices: mobile/desktop/tablet
4. cross environments: dev/qa/staging/production
5. RBAC: role based access control: user permissions: admin, customer, seller,vendor, guest, etc.
6. locator strategy: id, class, name, xpath, css selector,text, role, etc.
7. testing types: functional, regression, performance, security, accessibility, etc.
8. uber app: booking type: mini, auto, bike, cab, etc.
9. payment methods: card, netbanking, upi, wallet, etc.
*/