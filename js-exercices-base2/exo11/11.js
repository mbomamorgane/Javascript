function calculMoyenne() {

    let a = parseInt(prompt('entrer un nombre entier')), i = 0, tab = [], moyenne = 0
    while (true) {
        if (!Number.isInteger(a)) {
            alert("pas un nombre entier ")
            a = parseInt(prompt('entrer un nnombre entier'))

        } else if (a >= 0) {
            tab[i] = a
            i++
            a = parseInt(prompt("entrez un nombre entier"))

        } else {
            tab.forEach(function (tab) {
                moyenne += tab
            })
            
            return alert('la moyenne est de ' + moyenne / i + ' sur ' + i + ' entrée')
        }


    }
}