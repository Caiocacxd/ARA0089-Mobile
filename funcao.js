

function soma (numero1, numero2){
    return numero1 + numero2;
}

function initialization(){
    b = 3;
    a = 5;
    let c = soma3(10,10);
    console.log(a);
    console.log(b);
    console.log(c);
}


initialization();

function soma3 (numero1, numero2) {
    let a = soma(numero1, numero2);
    var b = 10;
    return a + b;
}