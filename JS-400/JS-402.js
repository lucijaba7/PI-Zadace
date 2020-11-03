let student = [
    {
        ime: "Ana",
        prezime: "Anić",
        upisan: true
    },
    {
        ime: "Zdenka",
        prezime: "Zdenić",
        upisan: false
    },
    {
        ime: "Mirko",
        prezime: "Mirić",
        upisan: false
    },
    {
        ime: "Lana",
        prezime: "Lanić",
        upisan: true
    },
    {
        ime: "Ivo",
        prezime: "Ivić",
        upisan: false
    },
    {
        ime: "Maja",
        prezime: "Majić",
        upisan: true
    },
    {
        ime: "Lucija",
        prezime: "Lucić",
        upisan: false
    },
    {
        ime: "Luna",
        prezime: "Lunić",
        upisan: true
    },
    {
        ime: "Tomo",
        prezime: "Tomić",
        upisan: true
    },
    {
        ime: "Grga",
        prezime: "Grgić",
        upisan: true
    }
]

const provjeri_2 = function (lista, pojam, status){
    for(let i=0; i<lista.length; i++)
        if((lista[i].ime.toLowerCase().includes(pojam.toLowerCase()) || lista[i].prezime.toLowerCase().includes(pojam.toLowerCase())) && (lista[i].upisan == status))
            return true;
    return false;
}

console.log(provjeri_2(student, "IĆ", false));
console.log(provjeri_2(student, "rt", true));