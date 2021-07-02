function menu(prato, tempoPreparo) {
    switch (prato) {
        case 1:
            if (tempoPreparo >= 30) console.log('KABUUM')

            else if (tempoPreparo >= 20) console.log('Pipoca queimou')

            else if (tempoPreparo < 10) console.log('tempo insuficiente')

            else if(tempoPreparo == undefined) console.log('tempo indefinindo')

            else console.log('Pipoca pronto, Bom apetite')

            break

            case 2:
            if (tempoPreparo >= 24) console.log('KABUUM')

            else if (tempoPreparo >= 16) console.log('macarrão queimou')

            else if (tempoPreparo < 8) console.log('tempo insuficiente')

            else if(tempoPreparo == undefined) console.log('tempo indefinindo')

            else console.log('macarrão pronto, Bom apetite')

            break

            case 3:
            if (tempoPreparo >= 45) console.log('KABUUM')

            else if (tempoPreparo >= 30) console.log('Carne queimou')

            else if (tempoPreparo < 15) console.log('tempo insuficiente')

            else if(tempoPreparo == undefined) console.log('tempo indefinindo')

            else console.log('Carne pronto, Bom apetite')

            break

            case 4:
            if (tempoPreparo >= 36) console.log('KABUUM')

            else if (tempoPreparo >= 24) console.log('feijão queimou')

            else if (tempoPreparo < 12) console.log('tempo insuficiente')

            else if(tempoPreparo == undefined) console.log('tempo indefinindo')

            else console.log('feijão pronto, Bom apetite')

            break

            case 5:
            if (tempoPreparo >= 24) console.log('KABUUM')

            else if (tempoPreparo >= 16) console.log('brigadeiro queimou')

            else if (tempoPreparo < 8) console.log('tempo insuficiente')

            else if(tempoPreparo == undefined) console.log('tempo indefinindo')

            else console.log('brigadeiro pronto, Bom apetite')

            break
            
            default: console.log('prato Inexistente')
    }
}


menu(1,30)
menu(2, 20)
menu(3, 15)
menu(4,24)
menu(5,15)