let velicina = 64;
let polje = "";
let stanje = true;

for(let i = 0; i < velicina; i++){
    if(!(i % 8) && i){ //ako ide u novi red mjenja stanje i ide u novi red
        stanje = !stanje;
        polje += "\n";
    } 
    if((stanje && !(i % 2)) || (!stanje && (i % 2))) polje+=" "; 
    else polje += "#";
    
}

console.log(polje)
