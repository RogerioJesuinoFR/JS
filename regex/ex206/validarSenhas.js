//Crie uma expressão regular para validar senhas. As senhas válidas devem ter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial(como !,@,#,$,etc.). Elas devem ter pelo menos 8 caracteres e no máximo 20.

function isValidPassword(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return regex.test(password);
}

console.log(isValidPassword("StrongPass1!"));
console.log(isValidPassword("weakpass"));