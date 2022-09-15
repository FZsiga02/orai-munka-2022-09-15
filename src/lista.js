const lista = []


export function hozzaad(szam){
    if (szam<0) {
        console.log("A megadott szám kisebb mint 0!")
    }else{
        lista.push(szam)
    }
}

export function atlag(){
    let osszeg = 0;
    let darab = 0;
    for (let i=0; i<lista.length; i++){
        osszeg+=lista[i]
        darab++
    }
    return osszeg/darab
}