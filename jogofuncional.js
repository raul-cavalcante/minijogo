//Criação de perssonagem padrão
const defaultPerssonagem ={
    nome: '',
    vida: 1,
    vidaMax: 1,
    ataque: 0,
    defesa: 0
}
//Criação do perssonagem 'Guerreiro'
const Guerreiro = (nome) =>{
    return {
        ...defaultPerssonagem,
        nome,
        vida: 100,
        vidaMax: 100,
        ataque: 16,
        defesa: 12
    }
}
//Criação do perssonagem 'Mago'
const Mago = (nome) =>{
    return{
        ...defaultPerssonagem,
        nome,
        vida: 70,
        vidaMax: 70,
        ataque: 32,
        defesa: 4,
    }
}
//Criação do perssonagem 'Monstro'
const Monstro = (nome) =>{
    return{
        ...defaultPerssonagem,
        nome,
        vida: 60,
        vidaMax: 60,
        ataque: 7,
        defesa: 13,
    }
}
//Criação do perssonagem 'Ogro'
const Ogro = (nome) =>{
    return{
        ...defaultPerssonagem,
        nome,
        vida: 130,
        vidaMax: 130,
        ataque: 20,
        defesa: 2,
    }
}
 
const Cenario = {
    lutador1: null,
    lutador2: null,
    lutador1El: null,
    lutador2El: null,

    start(lutador1, lutador2, lutador1El, lutador2El){
        this.lutador1 = lutador1
        this.lutador2 = lutador2
        this.lutador1El = lutador1El
        this.lutador2El = lutador2El

        this.lutador1El.querySelector('.butaoAtaque').addEventListener('click', () => this.ataques(this.lutador1, this.lutador2))
        this.lutador2El.querySelector('.butaoAtaque').addEventListener('click', () => this.ataques(this.lutador2, this.lutador1))

        this.update()
    },
    update(){
        //lutador1
        this.lutador1El.querySelector('.nome').innerHTML = `${this.lutador1.nome} - ${this.lutador1.vida} HP`
        let prcLutador1 = (this.lutador1.vida / this.lutador1.vidaMax) * 100
        this.lutador1El.querySelector('.barra').style.width = `${prcLutador1}%`
        //lutador2
        this.lutador2El.querySelector('.nome').innerHTML = `${this.lutador2.nome} - ${this.lutador2.vida} HP`
        let prcLutador2 = (this.lutador2.vida / this.lutador2.vidaMax) * 100
        this.lutador2El.querySelector('.barra').style.width = `${prcLutador2}%`
    },
    
    ataques(atacante, atacado){
        if(atacante.vida <= 0 || atacado.vida <= 0){
            log.adicionarMensagem('Alguém estar morto')
            return
        }
        const fatorAtaque = (Math.random() * 2).toFixed(2)
        const fatorDefesa = (Math.random() * 2).toFixed(2)

        const ataqueAtual = atacante.ataque * fatorAtaque
        const defesaAtual = atacado.defesa * fatorDefesa

        if(ataqueAtual > defesaAtual){
            atacado.vida -=ataqueAtual
            atacado.vida = atacado.vida < 0 ? 0 : atacado.vida
            log.adicionarMensagem(`<strong>${atacante.nome} </strong> causou ${ataqueAtual} de dano em <strong>${atacado.nome}</strong>`)
        } else{
            log.adicionarMensagem(`<strong>${atacado.nome}</strong> conseguiu se defender`)
        }
        this.update()
    }
}

const log = {
    lista: [],
    adicionarMensagem(msg){
        this.lista.push(msg)
        this.render()
    },
    render(){
        const logEl = document.querySelector('.log')
        logEl.innerHTML = ''

        for (let i in this.lista){
            logEl.innerHTML += `<li>${this.lista[i]}</li>`
        }
    }
}