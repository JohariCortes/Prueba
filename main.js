//llama la funcion de mostrar imagen
mostrar_imagen()

//alert("usa la barra espaseadora para pasar de diapositivas")
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
//la variable width hace que las imagenes tengan el mismo tamaño y trae los estilos 
let width = sliderIndividual[0].clientWidth;

console.log(width)

window.addEventListener("keypress", function(event){
    if (event.keyCode == 32){
       slides();
    }
}, true);


function slides(){

    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .7s";
    contador++;

 //   console.log(contador)
    if(contador > sliderIndividual.length){
        
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
           // console.log(contador)
            console.log(sliderIndividual.length)
    }
}
   function mostrar_video(){
       video1.style.display = "block";
       imagen1.style.display = "none";
       boton1_1.style.display = "none";
       boton1_2.style.display = "block";

   }
   function mostrar_imagen(){
       video1.style.display = "none";
       imagen1.style.display = "block";
       boton1_2.style.display = "none";
       boton1_1.style.display = "block";
   }
   //////////////////////////////////////////////////////////////animaciones///////////////

function a(){
   var a = anime({
            targets: document.getElementById('a'),
            translateY: 200,
            autoplay: false
    });

   document.querySelector('play-boton2').onclick = a.restart;
 }

