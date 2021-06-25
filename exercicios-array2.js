let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]

for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i])
}


let filmes2 = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
        let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];
        var cartoons2 = cartoons.pop();
        let juntos = filmes2.concat(cartoons);
        console.log(juntos);

        function diferentes(){
            const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
            const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 
            for(let i = 0; i < asiaScores.length; i++){
                if(asiaScores[i] != euroScores[i]){
                    console.log(asiaScores[i])
                }
            }
        };
        console.log(diferentes())