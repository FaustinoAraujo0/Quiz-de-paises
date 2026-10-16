var quiz = window.document.getElementById("quiz-container")
var random
var resquizrandom = Math.floor(Math.random() * 54)
var m = Math.floor(Math.random() * 4)
var span = window.document.getElementById("span")
var cont = 0
var acertos = 0

var btn_1 = window.document.getElementById("btn-1")
var btn_2 = window.document.getElementById("btn-2")
var btn_3 = window.document.getElementById("btn-3")
var btn_4 = window.document.getElementById("btn-4")

var resquiz = []

const paises = [
    { pais: "Argélia", capital: "Argel" },
    { pais: "Angola", capital: "Luanda" },
    { pais: "Benim", capital: "Porto-Novo" },
    { pais: "Botsuana", capital: "Gaborone" },
    { pais: "Burkina Faso", capital: "Ouagadougou" },
    { pais: "Burundi", capital: "Gitega" },
    { pais: "Cabo Verde", capital: "Praia" },
    { pais: "Camarões", capital: "Yaoundé" },
    { pais: "República Centro-Africana", capital: "Bangui" },
    { pais: "Chade", capital: "N'Djamena" },
    { pais: "Comores", capital: "Moroni" },
    { pais: "República do Congo", capital: "Brazzaville" },
    { pais: "República Democrática do Congo", capital: "Kinshasa" },
    { pais: "Costa do Marfim", capital: "Yamoussoukro" },
    { pais: "Djibuti", capital: "Djibuti" },
    { pais: "Egito", capital: "Cairo" },
    { pais: "Guiné Equatorial", capital: "Malabo" },
    { pais: "Eritreia", capital: "Asmara" },
    { pais: "Essuatíni", capital: "Mbabane" },
    { pais: "Etiópia", capital: "Adis Abeba" },
    { pais: "Gabão", capital: "Libreville" },
    { pais: "Gâmbia", capital: "Banjul" },
    { pais: "Gana", capital: "Acra" },
    { pais: "Guiné", capital: "Conacri" },
    { pais: "Guiné-Bissau", capital: "Bissau" },
    { pais: "Quénia", capital: "Nairobi" },
    { pais: "Lesoto", capital: "Maseru" },
    { pais: "Libéria", capital: "Monróvia" },
    { pais: "Líbia", capital: "Trípoli" },
    { pais: "Madagáscar", capital: "Antananarivo" },
    { pais: "Malawi", capital: "Lilongwe" },
    { pais: "Mali", capital: "Bamako" },
    { pais: "Mauritânia", capital: "Nouakchott" },
    { pais: "Maurícia", capital: "Port Louis" },
    { pais: "Marrocos", capital: "Rabat" },
    { pais: "Moçambique", capital: "Maputo" },
    { pais: "Namíbia", capital: "Windhoek" },
    { pais: "Níger", capital: "Niamey" },
    { pais: "Nigéria", capital: "Abuja" },
    { pais: "Ruanda", capital: "Kigali" },
    { pais: "São Tomé e Príncipe", capital: "São Tomé" },
    { pais: "Senegal", capital: "Dakar" },
    { pais: "Seicheles", capital: "Victoria" },
    { pais: "Serra Leoa", capital: "Freetown" },
    { pais: "Somália", capital: "Mogadíscio" },
    { pais: "África do Sul", capital: "Pretória" },
    { pais: "Sudão do Sul", capital: "Juba" },
    { pais: "Sudão", capital: "Cartum" },
    { pais: "Tanzânia", capital: "Dodoma" },
    { pais: "Togo", capital: "Lomé" },
    { pais: "Tunísia", capital: "Tunes" },
    { pais: "Uganda", capital: "Kampala" },
    { pais: "Zâmbia", capital: "Lusaka" },
    { pais: "Zimbábue", capital: "Harare" }
]

do {
        random = Math.floor(Math.random() * 54)
}while(random == resquizrandom)


for (var i = 0; i <= 3; i++) {  
    if (i == m) {
        resquiz[m] = paises[resquizrandom].capital
    }else {
        random = Math.floor(Math.random() * 54)
        do {
            random = Math.floor(Math.random() * 54)
        }while(random == resquizrandom)
        resquiz[i] = paises[random].capital
    }

    console.log(i, m)
}

span.innerHTML = `${paises[resquizrandom].pais}`

btn_1.innerHTML = `${resquiz[0]}`
btn_2.innerHTML = `${resquiz[1]}`
btn_3.innerHTML = `${resquiz[2]}`
btn_4.innerHTML = `${resquiz[3]}`

function verificar (event) {
    console.log("Função next executada com sucesso")
    console.log(event.target.innerText);
    console.log(paises[resquizrandom].capital);

    if (event.target.innerText == paises[resquizrandom].capital) {
        acertos++
        cont++
        event.target.style.backgroundColor = "#12e74e"
        setTimeout(function() {
            console.log("Agora passou 2 segundos");
            event.target.style.backgroundColor = ""
            next()
        }, 0.3 * 1000);
        
        
        
    }else {
        cont++
        event.target.style.backgroundColor = "#d33d32"
        setTimeout(function() {
            event.target.style.backgroundColor = ""
            next()
        }, 0.3 * 1000);
        
    }

}

function next() {
    console.log("Função next executada com sucesso")
    if (cont == 5) {
        localStorage.setItem("acertos", acertos);

        window.location.href = "pag1.html";
    }else {
        resquizrandom = Math.floor(Math.random() * 54)
        m = Math.floor(Math.random() * 4)

        for (var i = 0; i <= 3; i++) {  
            if (i == m) {
                resquiz[m] = paises[resquizrandom].capital
            }else {
                random = Math.floor(Math.random() * 54)
                if (random == resquizrandom) {
                    random = Math.floor(Math.random() * 54)
                }
                resquiz[i] = paises[random].capital
            }

            console.log(i, m)
        }

        span.innerHTML = `${paises[resquizrandom].pais}`

        btn_1.innerHTML = `${resquiz[0]}`
        btn_2.innerHTML = `${resquiz[1]}`
        btn_3.innerHTML = `${resquiz[2]}`
        btn_4.innerHTML = `${resquiz[3]}`
    }
    

}
