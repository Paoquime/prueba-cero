// <select name="lista" id="lista">
//         <option value="">Seleccionar Post</option>
//         <option value="texto">POST TEXTO</option>
//         <option value="cita">POST CITA</option>
//         <option value="meme">POST MEME</option>
//         <option value="pastilla">POST PASTILLA</option>
// </select>

window.addEventListener("load", function(){
  var selector=document.getElementById("selector");
  selector.addEventListener("change",function(){
   var selectorValor=selector.value;
       switch(selectorValor){
           case "texto":
               texto();
               break;
           case "cita":
                cita();
               break;
           case "meme":
                meme();
               break;
           case "pastilla":
                pastilla();
               break;

       }
  });

  function texto(){
       var contenedorTexto=document.createElement("div");
       var inputTexto=document.createElement("input");
       var textareaTexto=document.createElement("textarea");
       var salirPublicar=document.createElement("button");
       var salirButton=document.createElement("button");

       contenedorTexto.setAttribute("id","contenedor");
       inputTexto.setAttribute("placeholder","TITULO");
       textareaTexto.setAttribute("placeholder","INGRESAR TEXTO");
       salirPublicar.textContent="Publicar";
       salirButton.textContent="Salir";

       contenedorTexto.appendChild(inputTexto);
       contenedorTexto.appendChild(textareaTexto);
       contenedorTexto.appendChild(salirPublicar);
       contenedorTexto.appendChild(salirButton);
       cajaSelector.appendChild(contenedorTexto);

       cajaSelector.classList.add("cajaSelector");
  }

  function cita(){
       var contenedorCita=document.createElement("div");
       var inputCita=document.createElement("input");
       var textareaCita=document.createElement("textarea");
       var salirPublicar=document.createElement("button");
       var salirButton=document.createElement("button");

       contenedorCita.setAttribute("id","contenedor");
       inputCita.setAttribute("placeholder","AUTOR");
       textareaCita.setAttribute("placeholder","INGRESAR CITA");
       salirPublicar.textContent="Publicar";
       salirButton.textContent="Salir";

       contenedorCita.appendChild(inputCita);
       contenedorCita.appendChild(textareaCita);
       contenedorCita.appendChild(salirPublicar);
       contenedorCita.appendChild(salirButton);
       cajaSelector.appendChild(contenedorCita);

       cajaSelector.classList.add("cajaSelector");
     }

     function meme(linkmeme){
       var contenedorMeme=document.createElement("div");
       var inputMeme=document.createElement("input");
       var salirPublicar=document.createElement("button");
       var salirButton=document.createElement("button");

       contenedorMeme.setAttribute("id","contenedor");
       inputMeme.setAttribute("src","linkmeme");
       salirPublicar.textContent="Publicar";
       salirButton.textContent="Salir";

       contenedorMeme.appendChild(inputMeme);
       contenedorMeme.appendChild(salirPublicar);
       contenedorMeme.appendChild(salirButton);
       cajaSelector.appendChild(contenedorMeme);

       cajaSelector.classList.add("cajaSelector");
     }

     function pastilla(){
       var contenedorPastilla=document.createElement("div");
       var inputPastilla=document.createElement("input");
       var textareaPastilla=document.createElement("textarea");
       var salirPublicar=document.createElement("button");
       var salirButton=document.createElement("button");

       contenedorPastilla.setAttribute("id","contenedor");
       inputPastilla.setAttribute("type","color");
       textareaPastilla.setAttribute("placeholder","INGRESAR PASTILLITA");
       salirPublicar.textContent="Publicar";
       salirButton.textContent="Salir";

       contenedorPastilla.appendChild(inputPastilla);
       contenedorPastilla.appendChild(textareaPastilla);
       contenedorPastilla.appendChild(salirPublicar);
       contenedorPastilla.appendChild(salirButton);
       cajaSelector.appendChild(contenedorPastilla);

       cajaSelector.classList.add("cajaSelector");
     }
});