let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

switch (true) {
    case (bodovi < 50):
        ocjena = 1;
        break;
    case (bodovi < 63):
        ocjena = 2;
        break;
    case (bodovi < 76):
        ocjena = 3;
        break;
    case (bodovi < 89):
        ocjena = 4;
        break;
    case (bodovi <= 100):
        ocjena = 5;
        break;
    default: 
        console.log("Neispravan unos.");
}

poruka = ocjena > 1 ? "Čestitke!! Konačna ocjena je " + ocjena : "Nema čestitki :(";

console.log(poruka);