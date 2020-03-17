function updateWidth(pageWitdh, margen){
    let bodyWidth = document.querySelector("#slider-container")
    let sizeWidth = (bodyWidth.offsetWidth / pageWitdh) - margen;
    
    let card_slider = document.querySelectorAll(".slider-card")    

    card_slider.forEach(element=>{
    element.style.width=`${sizeWidth}px`
    element.style.margin=`0 ${margen/2}px`;
    })
}


window.addEventListener("resize", ()=>{
    

    if(window.matchMedia("(max-width: 991px)").matches){
                    updateWidth(2, 5);  
    }

    if(window.matchMedia("(max-width: 500px)").matches){
                    updateWidth(1, 0);
    }
    if(window.matchMedia("(min-width: 992px)").matches){
                    updateWidth(3, 10);
    }
})
