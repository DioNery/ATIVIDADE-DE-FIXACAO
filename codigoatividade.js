//ATIVIDADE-DE-FIXACAO

//1 questao

function hello(args) {
  return 'Olá ${args}!';
  }
  
//2 questao

function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    return x / y;
}

function calculadora(x, y, callback) {
    console.log(callback(x, y));
}

calculadora(1, 7, soma) ;
calculadora(12, 4, divisao);

//3 questao

function verify(x, callback) {
    return function verifyDeNovo(y) {
        callback(x, y);
    };
}

var valores = verify(15, function (x, y) {
    if(x % y == 0) {
        return console.log(true);
    } else{
        return console.log(false);
    } 
});

valores(9); // false
valores(3); // true

//4 questao

function meses(x) {
    switch (x) {
        case 1:
            return 'Janeiro';
            break;
        case 2:
            return 'Fevereiro';
            break;
        case 3:
            return 'Março';
            break;
        case 4:
            return 'Abril';
            break;
        case 5: 
            return 'Maio';
            break;
        case 6:
            return 'Junho';
            break;
        case 7:
            return 'Julho';
            break;
        case 8:
            return 'Agosto';
            break;
        case 9:
            return 'Setembro';
            break;
        case 10:
            return 'Outubro';
            break;
        case 11:
            return 'Novembro';
            break;
        case 12:
            return 'Dezembro';
            break;
        default:
            return 'Poxa comédia, põe de 1 a 12 aí, na moral.'
            break;
    }
}

//5 questao

function maior(x, y) {
    if (x > y) {
        return 'O primeiro número é maior que o segundo!';
    } else {
        return 'O segundo número é maior que o primeiro!';
    }
}

function igual(x, y) {
    if (x == y) {
        return 'O primeiro número é igual ao segundo';
    } else {
        return 'O primeiro número não é igual ao segundo';
    }
}

function compara(x, y, callback) {
    return callback(x, y);
}