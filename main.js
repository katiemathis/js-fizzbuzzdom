let containerElement = document.getElementById('container');



for (let i = 1; i < 101; i++) {
    console.log('Ciclo; ' + i);
    if (i % 3 === 0 && i % 5 === 0){
        containerElement.innerHTML += "<div class='fizzbuzz'>fizzbuzz</div>";
    } else if (i % 5 === 0){
        containerElement.innerHTML += "<div class='buzz'>buzz</div>";
    } else if (i % 3 === 0) {
        containerElement.innerHTML += "<div class='fizz'>fizz</div>";
    } else if (i % 3 !== 0 && i % 5 !== 0){
        containerElement.innerHTML += "<div class='box'>"+ i +"</div>";
    }

}