var pres = document.getElementById("pres");

var acertos = localStorage.getItem("acertos");

pres.innerText = `Você acertou ${acertos} de 5 perguntas!🎉`;

function recomecar () {
    window.location.href = "index.html"
}