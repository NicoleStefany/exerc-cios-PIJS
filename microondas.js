function menu(comidas, tempoPreparo) 
{
    let prato;

    switch (comidas) 
    {
        case "pipoca":
            prato=10;
            microondas(prato,tempoPreparo)
            break;
        case "macarrão":
            prato=8;
            microondas(prato,tempoPreparo)
            break;
        case "carne":
            prato=15;
            microondas(prato,tempoPreparo)
            break;
        case "feijão":
            prato=12;
            microondas(prato,tempoPreparo)
            break;
        case "brigadeiro":
            prato=8;
            microondas(prato,tempoPreparo)
            break;
        default:
            console.log("Prato inexistente")
    }
}

function microondas(prato, tempoPreparo) {
    if(tempoPreparo < prato){
        console.log("Tempo insuficiente")
    } else if(tempoPreparo >=3 * prato){
        console.log("KABUUUM!!")
    } else if(tempoPreparo >=2 * prato){
        console.log("A comida queimou!")
    } else {
        console.log("Prato pronto, bom apetite!!")
    }
}


menu('pipoca',10)
menu('macarrão',25)
menu('brigadeiro',20)