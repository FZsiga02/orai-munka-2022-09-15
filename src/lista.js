const lista = []

function hozzaad(){
    let szam
    if (szam<0) {
        console.log("A megadott szám kisebb mint 0!")
    }else{
        lista.push(szam)
    }
}

function atlag(){
    let osszeg = 0;
    let darab = 0;
    for (i=0; i<list.length; i++){
        osszeg+=lista[i]
        darab++
    }
    console.log(osszeg/darab)
}