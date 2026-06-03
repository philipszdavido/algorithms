function nnamdiChidumeSort(pot: number[]) {
    for (let i = 1; i < pot.length; i++) {
        const element = pot[i];
        const prev = pot[i - 1]
        if (element < prev) {
            pot[i] = prev;
            pot[i - 1] = element
            i = 0
        }
        
    }
    return pot
}

const sortrray = [3, 2, 1] //[4, 56, 34, 10, 77, 51, 93, 30, 5, 52]
console.log(nnamdiChidumeSort(sortrray))
