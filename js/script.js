
let num = +prompt('Введите число');

if (num === 1 || num === 0) {
    console.log('Введите другое число, это не подходит!');
}

else {
    let a = true;
    for (i = 2; i < num; i++){
        if (num % i === 0) {
            a = false;       
            break;
        }   
    }
    console.log(a);
}
