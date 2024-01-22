// DESAFIO #3 Escrevendo Classes de um Jogo

class heroiDeAventura{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

        if (this.tipo === "mago"){
            this.ataque = "magia."
        }

        if (this.tipo === "guerreiro"){
            this.ataque = "espada."
        }

        if (this.tipo === "monge"){
            this.ataque = "artes marciais."
        }
        if (this.tipo === "ninja"){
            this.ataque = "shuriken."
        }
    }

    escrever(){
        console.log("O " + this.tipo + " atacou usando " + this.ataque)
    }

}

let mago = new heroiDeAventura("TomediL2", 16, "mago")
let guerreiro = new heroiDeAventura("ValdozZ", 19, "guerreiro")
let monge = new heroiDeAventura("Anakin", 23, "monge")
let ninja = new heroiDeAventura("Dad", 23, "ninja")


mago.escrever()
guerreiro.escrever()
monge.escrever()
ninja.escrever()
