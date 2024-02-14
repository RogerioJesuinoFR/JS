//Verifique se uma string corresponde a um formato de data válido (dd/mm/aaa).

function isValidDate(date){
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if(!regex.test(date)){
        return false;
    }

    const [day, month, year] = date.split('/').map(Number);
    const testDate = new Date(year, month - 1, day);
    return testDate.getDate() === day && testDate.getMonth() + 1 === month;
}

console.log(isValidDate("25/12/2020"));
console.log(isValidDate("31/02/2020"));