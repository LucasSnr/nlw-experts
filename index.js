//cria um array com [] e dentro do array varios objetos {}
const perguntas = [
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas: [
        "Documento de Orientação Mínima",
        "Documento de Objeto de Modelo",
        "Documento de Objeto do Modelo",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para imprimir mensagens no console em JavaScript?",
      respostas: [
        "console.write()",
        "console.log()",
        "console.print()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Float",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o símbolo de comentário de linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para converter um string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable x;",
        "var x;",
        "x = variable;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Determinar o tipo de uma variável",
        "Definir o tipo de uma variável",
        "Comparar tipos de variáveis",
      ],
      correta: 0
    },
    {
      pergunta: "Como você chama uma função chamada 'myFunction' em JavaScript?",
      respostas: [
        "chamar myFunction();",
        "call myFunction();",
        "myFunction();",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    }
  ];
  
  //seleciona o conteudo do id quiz
  const quiz = document.querySelector('#quiz')
  
  //selecio conteudo do nó template
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //cria uma repetição para puxar as perguntas
  for(const item of perguntas){

    //faz com que seja criado um novo template com todo conteudo
   const quizItem = template.content.cloneNode(true)

   //aidiciono informação no h3, vinda do objeto
   quizItem.querySelector('h3').textContent = item.pergunta
  
  //laço para adicionar as respostas
   for(let resposta of item.respostas){

     //seleciona o dl e o dt dentro do template e clona o que esta   dentro do dt
     const dt = quizItem.querySelector('dl dt').cloneNode(true)

     //atribui os valores da resposta do objeto no dt
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
  
  
  
     //seleciona seleciona o dl dentro do template e adiciona novos dt
     quizItem.querySelector('dl').appendChild(dt)
   }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca pergunta na tela
  quiz.appendChild(quizItem)
  }