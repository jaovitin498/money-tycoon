let money = 500
let status = 0
let ano = 0
let moto = 1
let motoPreco = 1000 * moto
let cll = 0
let carro = 1
let carroPreco = 2500 * carro


function updateMoto(){
    motoPreco = moto * 1000
    document.getElementById("mp").innerText = motoPreco
    document.getElementById("nm").innerText = moto
}


function updateCarro(){
    carroPreco = carro * 2500
    document.getElementById("cp").innerText = carroPreco
    document.getElementById("nc").innerText = carro
}

function updateMoney(){
document.getElementById("money").innerText = money
}

function updateStatus(){
    document.getElementById("status").innerText = status
}

function passarAno(){
    ano += 1

    document.getElementById("ano").innerText = ano
}

setInterval(passarAno, 10000)
    
function motoLoja(){
    if (money < motoPreco){
        alert("você não tem dinheiro suficiente para comprar a moto")
    }else{
        money = money - motoPreco
        updateMoney()

        status = status + 100
        updateStatus()

        moto = moto + 1

        addLog("voce comprou a moto nivel" +moto - 1)
        addLog("moto atualizada na loja para nivel" +moto)

        updateMoto()
    }
}

function carroLoja(){
    if (money < carroPreco){
        alert("você não tem dinheiro suficiente para comprar o carro")
    }else{
        money = money - carroPreco
        updateMoney()

        status = status + 250
        updateStatus()

        carro = carro + 1

        addLog("voce comprou o carro nivel" +carro - 1)
        addLog("carro atualizado na loja para nivel" +carro)

        updateCarro()
    }
}

function addLog(text){

const log = document.getElementById("log")

const message = document.createElement("p")

message.innerText = text

log.prepend(message)

}

function freelance(){

let gain = Math.floor(Math.random()*200)+50

money += gain

updateMoney()

addLog("💻 Você fez um freelance e ganhou R$"+gain)

}

function motoboy(){

let gain = Math.floor(Math.random()*80)+20

money += gain

updateMoney()

addLog("🏍️ Você fez uma entrega e ganhou R$"+gain)

}

function redes(){

let gain = Math.floor(Math.random()*500)-100

money += gain

updateMoney()

if(gain > 0){

addLog("📱 Seu vídeo viralizou! +R$"+gain)

}else{

addLog("📱 O vídeo flopou... "+gain)

}

}



function garçom(){
    money = money + 7
    updateMoney()

}


setInterval(garçom, 2000)

updateMoney()
updateStatus()