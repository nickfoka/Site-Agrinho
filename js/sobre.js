//A função tira ou coloca a classe "mododark" no body, que muda o valor da variavel de cores, sobrepondo e aplicando elas nos textos e cores principais.
//Também muda o texto de "Modo Dark" para "Modo Light", ou o contrário, quando o botão é apertado.
function darkmode() {
   var element = document.body;
   const texto = document.getElementById('txtdarkmode');
   element.classList.toggle("mododark");
   if (texto.textContent == "Modo Dark") {
    texto.textContent = "Modo Light";
   }
   else {
    texto.textContent = "Modo Dark";
   }
    }