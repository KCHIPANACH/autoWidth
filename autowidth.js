function updateWidth(pageWitdh, margen){
    let bodyWidth = document.querySelector("#slider-container")
    let sizeWidth = (bodyWidth.offsetWidth / pageWitdh) - margen;
    
    let card_slider = document.querySelectorAll(".slider-card")    

    card_slider.forEach(element=>{
    element.style.width=`${sizeWidth}px`
    element.style.margin=`0 ${margen/2}px`;
    })
}



let autoSlider;
var paso = 1;

function start(pageWitdh){
  if(autoSlider) clearInterval(autoSlider);
  autoSlider = setInterval(function(){scrollStep(pageWitdh)}, 3000);
}

function stop(){
  if(autoSlider) clearInterval(autoSlider);
  let cards = document.querySelectorAll(".slider-card ");
  let cantCards = cards.length;
  paso = cantCards + 100; /* 100 solo es un valor cualquiera, para romper la condicional de scrollStep() */ 
}

function scrollStep(pageWitdh){
  let bodyWidth = document.querySelector("#slider-container");
  let step = (bodyWidth.offsetWidth / pageWitdh);
  let cards = document.querySelectorAll(".slider-card ");
  let cantCards = cards.length;

  let slider = document.querySelector("#slider");

  if(paso > cantCards - pageWitdh){
    slider.scrollBy(-(cantCards*step + 1000), 0)
    paso=1;
    console.log(paso);
  }else{
    slider.scrollBy(step, 0);
    paso++;
    console.log(paso);
  }

  console.log("hola")

}

function breakPoints(){
if(window.matchMedia("(max-width: 991px)").matches){
    updateWidth(2, 5);
    stop();
    start(2);    
}

if(window.matchMedia("(max-width: 500px)").matches){
    updateWidth(1, 0);
    stop();
    start(1);
}
if(window.matchMedia("(min-width: 992px)").matches){
    updateWidth(3, 10);
    stop();
    start(3);
}
}

window.addEventListener("resize", ()=>{
  breakPoints();
})

breakPoints();

