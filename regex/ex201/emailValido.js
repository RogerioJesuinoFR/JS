function isValidEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

console.log(isValidEmail("example@email.com"));
console.log(isValidEmail("invalid.email@"));