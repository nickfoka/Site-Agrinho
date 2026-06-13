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
async function clique(valor) {
   if (valor == "certo") {
      paragrafo.textContent = "Certo";
      divparagrafo.classList.remove("errado");
      divparagrafo.classList.add("certo");
      acertos += 1;
      fase += 1;
      console.log(acertos);
      botao.setAttribute("disabled", "true");
      botao2.setAttribute("disabled", "true");
      await delay(2000);
      divparagrafo.classList.remove("certo");
      paragrafo.textContent = "?";
      botao.removeAttribute("disabled");
      botao2.removeAttribute("disabled");
      proxFase(fase);
   }
   else if (valor == "errado") {
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
function fim() {
   subcont.classList.add("sumir");
   resultadop.textContent = "Você acertou " + acertos + " de 4!";
   resultado.classList.add("aparecer");
}