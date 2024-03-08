const perssonagem1 = Guerreiro('Raul O Guerreiro')
const perssonagem2 = Mago('Raul O Mago')
const perssonagem3 = Monstro('Raul O Monstro')
const perssonagem4 = Ogro('Raul O Ogro')

Cenario.start(
    perssonagem3,
    perssonagem1,
    document.querySelector('#lutador1'),
    document.querySelector('#lutador2')
)