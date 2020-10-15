var maior = n1;
if (n1 == n2) {
    if (n2 == n3) {
        alert("Os numeros n1, n2 e n3 são iguais: " + n1);
    } else {
        alert("Os numeros n1 e n2 são iguais: " + n1);
    }
}else if (n1 == n3) {
    alert("Os numeros n1 e n3 são iguais: " + n1);
}

if (n2 >= maior){
    maior = n2;
    if (n3 > maior){
        maior = n3;
    }    

}

alert("O maior número digitado foi: " + maior);


