for(let i = 0; i < 80; i++) {
    if(i < 18) {
        document.getElementById('monage').innerText += "Le capitaine a " + i + " ans, le capitaine est jeune" + "<br>";
    } else if(i <= 50) {
        document.getElementById('monage').innerText += "Le capitaine a " + i + " ans, le capitaine n'est pas trés vieux" + "<br>";
    } else {
        document.getElementById('monage').innerText += "Le capitaine a " + i + " ans, le capitaine est vieux" + "<br>";
    }
}