function conversionTemperature() {
    document.getElementById("affiche").onclick = function () { conversionTemperature() } 
    function conversionTemperature() {
        let choix = parseInt(prompt("Choisissez le type de conversion: \n 0. Fin du programme. \n 1. De Celsius vers Fahrenheit. \n 2. De Celsius vers Kelvin. \n 3. De Fahrenheit vers Celsius.\n 4. De Fahrenheit vers Kelvin.\n 5. De Kelvin vers Celsius.\n 6. De Kelvin vers Fahrenheit"))
        let valeur = parseInt(prompt("entre la température à convertir"));
        let result;
        switch (choix) {
            case 0:
                alert("Aurevoir");
                break;
            case 1:
                result = (valeur * 9 / 5) + 32;
                alert("Cela fait " + result + " degrés Farenheit");
                break;
            case 2:
                result = valeur + 273.15;
                alert("Cela fait " + result + " degrés Kelvin");
                break;
            case 3:
                result = (valeur - 32) / (9 / 5);
                alert("Cela fait " + result + " degrés Celsius");
                break;
            case 4:
                result = ((valeur - 32) * (5 / 9)) + 273.15;
                alert("Cela fait " + result + " degrés Kelvin");
                break;
            case 5:
                result = valeur - 273.15;
                alert("Cela fait " + result + " degrés Celsius");
                break;
            case 6:
                result = (valeur * 9 / 5) - 459.67;
                alert("Cela fait " + result + " degrés Farenheit");
                break;

        }
    }
}