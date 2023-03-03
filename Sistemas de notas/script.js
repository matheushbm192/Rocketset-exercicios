function category(nota) {

   
    if (nota >= 90) {
        resultado = "A";
    } else if (nota >= 80 && nota <= 89){
        resultado = "B";    
    }  else if (nota >= 70 && nota <= 79){
        resultado = "C";    
    } else if (nota >= 60 && nota <= 69){
        resultado = "D";    
    } else if (nota < 60 && nota >= 0) {
        resultado = "F";
     }else {
        resultado = "Nota Invalida"
    }
    return resultado;
   
   
   
   
}