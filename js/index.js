function darkmode() {
   var element = document.body;
   const texto = document.getElementById('txtdarkmode');
   element.classList.toggle("mododark");
      if (element.classList.contains("mododark")) {
    localStorage.setItem("modoDark", true);
    console.log("dark ligado");
}
   else {
    localStorage.setItem("modoDark", false);
        console.log("dark desligado");
}
   if (texto.textContent == "Modo Dark") {
    texto.textContent = "Modo Light";
   }
   else {
    texto.textContent = "Modo Dark";
   }
}
function irlink(link) {
   location.href = link.value;
}