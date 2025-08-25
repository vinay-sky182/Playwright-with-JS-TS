function login(username: string, password: string): boolean;
function login(username: string, password: string, role: string): boolean;

function login(username: string, otp: number): boolean;

function login(username: any, passwordOrOtp: any, role?: string): boolean {
    if (role !== undefined) {
        console.log(`login with username: ${username}, password: ${passwordOrOtp} and role: ${role}`);
        return true;
    } else if (typeof passwordOrOtp === 'number') {
        console.log(`login with username: ${username} and otp: ${passwordOrOtp}`);
        return true;
    } else {
        console.log(`login with username: ${username} and password: ${passwordOrOtp}`);
        return true;
    }
}

console.log(login('admin', 'admin123'));
login('admin', 'admin123', 'superadmin');
login('admin', 9090);

