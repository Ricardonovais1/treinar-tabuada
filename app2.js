;(function(){
    'use strict'

    const factor1 = document.querySelector('.factor1')
    const factor2 = document.querySelector('.factor2')
    const result = document.getElementById('result')
    const scoreCerto = document.querySelector('.scoreCerto')
    const scoreErrado = document.querySelector('.scoreErrado')
    const button = document.querySelector('button')
    const startButton = document.getElementById('start-button')
    const message = document.querySelector('.message')


    let certo = 0
    let errado = 0
    scoreErrado.textContent = errado
    scoreCerto.textContent = certo


    function Tabuada(factor1, factor2, inputValue) {
        this.factor1 = factor1;
        this.factor2 = factor2;
        this.inputValue = inputValue;
        this.calcular = function() {
            let realValue = factor1 * factor2
            let isCorrect = realValue === inputValue
            
            console.log(isCorrect)
            if (isCorrect) {
                certo++
                message.textContent = `Isso! É ${realValue}!`
                startSingleRound()
            } else {
                errado ++
                message.textContent = `Hummm... na verdade é ${realValue}`
                startSingleRound()
            }
            result.value = ''
            result.focus()
        }
    }

     // Iniciar
     startButton.addEventListener('click', startSingleRound, {capture: false})

     function startSingleRound() {
         
         result.value = ''
         startButton.classList.add('not-show')
         result.classList.remove('not-show')
         button.classList.remove('not-show')
         let num1 = Math.ceil(Math.random() * 9)
         let num2 = Math.ceil(Math.random() * 9)
         scoreErrado.textContent = errado
         scoreCerto.textContent = certo
         factor1.textContent = num1
         factor2.textContent = num2
         result.focus()
         
         let actualResult = num1 * num2
     }

     button.addEventListener('click', function(){
        let userInput = parseInt(result.value)
        let num1 = parseInt(factor1.textContent)
        let num2 = parseInt(factor2.textContent)
        

        let cadaTabuada = new Tabuada(num1, num2, userInput)
        cadaTabuada.calcular()
     })

})()