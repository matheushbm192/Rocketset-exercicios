function transform (temp) {
    //verifica em qual unidade de medida está 
        let celsiusExist = temp.toUpperCase().includes('C');
        let fahrenhitExist = temp.toUpperCase().includes('F');

        if(!celsiusExist && !fahrenhitExist) {
            throw new Error('Unidade de medida está incorreta')
        }
    //calculo 1 para celsius
        let updateTemp = Number(temp.toUpperCase().replace("F",""));
        let formula = fahrenheit => (fahrenheit - 32) *5/9;
        let degreeSign = 'C';

    //calculo 2 para fahrenhit
        if(celsiusExist) {
            updateTemp = Number(temp.toUpperCase().replace("C",""));
            formula = celsius => celsius * 9/5 + 32;
            degreeSign = 'F';

        }

        return formula(updateTemp) + degreeSign;           
    
    }

    try {
        console.log(transform("66F"))
        console.log(transform("48C"))
        transform("48G")
    } catch (error) {
        console.log(error.message)
    }