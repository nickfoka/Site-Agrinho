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