let point = 0;
let hs = 0;
let dino = document.querySelector(".dino");
let dragon = document.querySelector(".dragon");
document.onkeydown = function(e){
    if(e.keyCode == 38){
    
       dino.classList.add("dinom");
       setTimeout(()=>{
        dino.classList.remove("dinom");
       } , 500);  
    }
}
setInterval((h)=>{
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    gx = parseInt(window.getComputedStyle(dragon,null).getPropertyValue("left"));
    dy =parseInt(window.getComputedStyle(dino,null).getPropertyValue("bottom"));
    gy = parseInt(window.getComputedStyle(dragon,null).getPropertyValue("bottom"));
    dh =parseInt(dino.offsetHeight);
    dw = parseInt(dino.offsetWidth);
    gh = parseInt(dragon.offsetHeight);
    gw = parseInt(dragon.offsetWidth);
    if (dx < (gx+gw) && (dx+dw)>gx  && dy<(gy+gh) && (dy+dh)>gy){
         alert( "Game over you loose");
         if(hs<point){
            hs = point;
            point = 0;
         }else{
            point=0;
         }
    gx = 5000;
          
        }else{
            point++;
            document.querySelector("h1").innerText = `Point :${point}`;
            document.querySelector("h2").innerText = `High score :${hs}`;

        }
    } , 100);;

// let dino = document.querySelector(".dino");
// dino.classList.add("dinom");