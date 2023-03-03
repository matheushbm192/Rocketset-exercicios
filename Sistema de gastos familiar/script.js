const receita = [200, 10, 40, 80, 403, 804, 29, 199]
const gasto = [19, 70, 84, 302, 709]

function soma (receita, gasto){
    let somaReceita;
    let somaGasto;
    for(let i = 0; i < receita.length; i++){
        somaReceita =+ receita[i]; 
      
    }
    for(let j = 0; j < gasto.length; j++){
        somaGasto =+ gasto[j];
       
    }
    return somaGasto - somaReceita ;
}

console.log("Seu saldo é: ",soma(receita, gasto))