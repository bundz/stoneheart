const fs = require('fs')

let cards = fs.readFileSync('./database/cards.csv', {encoding: 'utf8'});
let newCards = [];

cards = cards.split('\n');
let card;
for(card of cards ){
    card = card.split('|');

    if(card[9] != undefined && card[9].includes('Minion')){
        newCards.push(card);
        console.log()
    }
}

const obj = [];
let cont = 0;

for (card of newCards){
    if( cont != 0 ) {
        obj.push({
            'id' : cont,
            'name' : card[1],
            'description' : card[2],
            'race' : card[3],
            'class' : card[4],
            'cost' : card[5],
            'attack' : card[6],
            'health' : card[7],
            'type' : card[8],
            'minion/spell' : card[9]
        });
    }

    cont++;
}
const data = JSON.stringify(obj);

fs.writeFile("./database/cards.json", data, err=>{
    if(err){
      console.log("Error writing file" ,err)
    } else {
      console.log('JSON data is written to the file successfully')
    }
   })
