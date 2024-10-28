//DATI
const userKm = prompt ("Quanti chilometri desideri percorrere?");
const userAge = prompt ("Qual è la tua età?");
console.log(userKm,userAge);

//ESECUZIONE LOGICA

//Trasformazione delle stringhe in numeri
const numberUserKm = parseInt (userKm);
const numberUserAge = parseInt (userAge);
console.log(numberUserKm,numberUserAge);

//CONTROLLO SUI DATI DI INPUT
if (isNaN(numberUserAge,numberUserKm)){
    alert("Devi indicare per forza un numero! Non sono ammesse lettere, fai attenzione!")
} else{ 
    
    //calcolo del prezzo del biglietto
    const ticketPrice = 0.21 * numberUserKm;
    console.log(ticketPrice);
    
    //Calcolo dello sconto del 20%
    const discountTwenty = ticketPrice / 100 * 20;
    console.log(discountTwenty);
    
    //Calcolo del prezzo finale del biglietto con lo sconto del 20%
    const finalPriceTwenty = ticketPrice - discountTwenty
    console.log(finalPriceTwenty.toFixed (2))
    
    //Calcolo dello sconto del 40%
    const discountForty = ticketPrice / 100 * 40;
    console.log(discountForty);
    
    //Calcolo del prezzo finale del biglietto con lo sconto del 40%
    const finalPriceForty = ticketPrice - discountForty
    console.log(finalPriceForty.toFixed (2))
    
    //Condizioni
    let message;
    if(numberUserAge < 18) {
        message = `il totale da pagare è ${finalPriceTwenty.toFixed(2)} €`;
    }else if (numberUserAge > 65){
        message = `Il totale da pagare è ${finalPriceForty.toFixed(2)} €`;
    }else{
        message = `Il totale da pagare è ${ticketPrice.toFixed(2)} €`
    }
    //OUTPUT
    console.log(message)
    const finalMessage = alert(message)
}
//OUTPUT
console.log(message)
const finalMessage = alert(message)