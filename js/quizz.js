//Definição de variaveis.
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
var acertos = 0;
var fase = 0;
const resultadop = document.getElementById('resultadop');
const resultado = document.querySelector('.resultado');
const subcont = document.querySelector('.subcont');
const divparagrafo = document.querySelector('.resposta');
const paragrafo = document.getElementById('paragrafo');
const pergunta = document.getElementById('pergunta');
const botao = document.getElementById('botaoresposta');
const botao2 = document.getElementById('botaoresposta2');

//Função principal. Cada botão tem um atributo "Value", e dependendo do botão que ele apertar, irá chamar esta funcão com o "valor" sendo ou "certo" ou "errado".
async function clique(valor) {
   //Será executado caso ele acerte a resposta (valor do botão seja igual a "certo").
   if (valor == "certo") {
   //Altera o algumas caracteristicas e o texto do paragrafo "certo" e "errado" que aparece em cima quando você aperta o botão.
      paragrafo.textContent = "Certo";
      divparagrafo.classList.remove("errado");
      divparagrafo.classList.add("certo");
   //Soma 1 ao numero de acertos, e à fase.
      acertos += 1;
      fase += 1;
   //Desabilita os botões, para não ser possivel ficar apertando sem parar e ferrar com a contagem de fases.
      botao.setAttribute("disabled", "true");
      botao2.setAttribute("disabled", "true");
   //delay de 2 segundos.
      await delay(2000);
   //depois dos 2 segundos, remove a classe "certo", fazendo o parágrafo sumir.
      divparagrafo.classList.remove("certo");
      paragrafo.textContent = "?";
   //Habilita o botão novamente, e passa pra proxima fase.   
      botao.removeAttribute("disabled");
      botao2.removeAttribute("disabled");
   //Aqui ele chama a função fase, que vai mudar o texto dos botões e a pergunta de acordo com o valor da variavel fase, que é adicionado 1
   //após cada resposta.
      proxFase(fase);
   }
      //Será executado caso ele erre a resposta (valor do botão seja igual a "errado").
   else if (valor == "errado") {
   //Aqui basicamente tudo se repete.
      paragrafo.textContent = "Errado";
      divparagrafo.classList.remove("certo");
      divparagrafo.classList.add("errado");
      fase += 1;
      botao.setAttribute("disabled", "true");
      botao2.setAttribute("disabled", "true");
      await delay(2000);
      divparagrafo.classList.remove("errado");
      paragrafo.textContent = "?";
      botao.removeAttribute("disabled");
      botao2.removeAttribute("disabled");
      proxFase(fase);
   }
}
//A cada fase que passa, o texto dos botões é alterado, e no fim, chama a função fim().
function proxFase(fase) {
   switch (fase) {
      case 0:
      pergunta.textContent = "O que torna o agro brasileiro importante para um futuro mais sustentável?";
      botao.textContent = "O aumento do desmatamento para expandir áreas de produção";
      botao2.textContent = "O uso de tecnologias que ajudam a produzir mais alimentos com menor impacto ambiental";
      break;
      case 1:
      pergunta.textContent = "Qual prática ajuda a conservar o solo e aumentar a sustentabilidade no campo brasileiro?";
      botao.textContent = "Queimar a vegetação antes de cada plantio";
      botao2.textContent = "Plantio direto, que reduz a erosão do solo";
      break;
      case 2:
      pergunta.textContent = "Por que o uso consciente da água é importante para o agro sustentável?";
      botao.textContent = "Porque garante recursos hídricos para as futuras gerações e para a produção de alimentos";
      botao2.textContent = "Porque a água dos rios é ilimitada e não precisa ser preservada.";
      break;
      case 3:
      pergunta.textContent = "Qual destes elementos é essencial para a produção agrícola e para a biodiversidade?";
      botao.textContent = "A retirada de toda a vegetação nativa das propriedades rurais";
      botao2.textContent = "Os polinizadores, como as abelhas";
      break;
      case 4:
         fim();
      break;
   }
}
//Faz todo o balão de quizz desaparecer, e faz o texto de resultado aparecer, e mudando o texto dele para a quantidade de acertos.
function fim() {
   subcont.classList.add("sumir");
   resultadop.textContent = "Você acertou " + acertos + " de 4!";
   resultado.classList.add("aparecer");
}
//A função tira ou coloca a classe "mododark" no body, que muda o valor da variavel de cores, sobrepondo e aplicando elas nos textos e cores principais.
//Também muda o texto de "Modo Dark" para "Modo Light", ou o contrário, quando o botão é apertado.
function darkmode() {
    element = document.body;
   const texto = document.getElementById('txtdarkmode');
   element.classList.toggle("mododark");
   if (texto.textContent == "Modo Dark") {
    texto.textContent = "Modo Light";
   }
   else {
    texto.textContent = "Modo Dark";
   }
}