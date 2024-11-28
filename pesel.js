function checkPesel() {
           
    let pesel = prompt('Podaj swój numer PESEL:');
   
   
    if (pesel.length !== 11 || !/^\d+$/.test(pesel)) {
        alert("PESEL składa się z 11 cyfr, wprowadź poprwany pesel.");
        return;
    }

    let year = parseInt(pesel.substring(0, 2));
    let month = parseInt(pesel.substring(2, 4));
    let day = parseInt(pesel.substring(4, 6));
    const gender = parseInt(pesel.charAt(9)) % 2 === 0 ? "Kobieta" : "Mężczyzna";

    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    if (month >= 1 && month <= 12) {
        year += 1900;
    } else if (month >= 21 && month <= 32) {
        month -= 20;
        year += 2000;
    } else if (month >= 41 && month <= 52) {
        month -= 40;
        year += 2100;
    } else if (month >= 61 && month <= 72) {
        month -= 60;
        year += 2200;
    } else {
        alert("Popraw mięsiądz w swoim peselu.");
        return;
    }
   
    const daysInMonth = [31, (rokprzestepy(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day < 1 || day > daysInMonth[month - 1]) {
        alert("Popraw dzień w swoim peselu.");
        return;
    }

    document.write('Rok: ', year, "<br>");
    document.write('Miesiąc: ', months[month - 1], "<br>");
    document.write('Dzień: ', day, "<br>");
    document.write('Płeć: ', gender, "<br>");
}
function rokprzestepy(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
