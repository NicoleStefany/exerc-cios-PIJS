function Restaurante(nome,cardapio,){
this.nome = nome;
this.cardapio = cardapio;
this.entrada = function() {

return 'Bem vindo ao '+this.nome+ ' .Sintam-se a vontade este é nosso Cardapio ' + this.cardapio.join(',');
    
      
 }
};

const restaurante2= new Restaurante('Donna Nonna',['Macarrão', 'Lasanha com diversos molhos', 'Risoto']);

console.log(restaurante2.entrada());