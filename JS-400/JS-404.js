let studenti = [
    {
    ime: "Marko",
    prezime: "Marković",
    grad: "Pula"
    },
    {
    ime: "Iva",
    prezime: "Ivić",
    grad: "Našice"
    },
    {
    ime: "Lucija",
    prezime: "Lucić",
    grad: "Zagreb"
    },
    {
    ime: "Nikola",
    prezime: "Nikolić",
    grad: "Rijeka"
    }
   ];

function napredna_pretraga(lista, pojam) {
    pom_polje=pojam.split(" ");
    for (let i = 0; i < lista.length; i++)
        for (let j = 0; j < pom_polje.length; j++)
            if (lista[i].ime.toLowerCase().includes(pom_polje[j].toLowerCase()) || lista[i].prezime.toLowerCase().includes(pom_polje[j].toLowerCase()) || lista[i].grad.toLowerCase().includes(pom_polje[j].toLowerCase()))
                return i;
    return 99999;
}
   
console.assert(napredna_pretraga(studenti, "ma ić") == 0); 
console.log(napredna_pretraga(studenti, "jja"));
console.log(napredna_pretraga(studenti, "ijek"));