const coins = document.querySelector(".coins");
const tapBtn = document.querySelector(".tap-btn");
const ucPic = document.querySelector(".uc-pic");
let n = 10000;
let S = 0
for(let i=1;i<=1;i++){
    S++
    tapBtn.addEventListener("click",()=>{ 
        coins.innerHTML=`${(S++)/100}`
    });
}

tapBtn.addEventListener("mousedown",()=>{ 
    ucPic.style.scale=`${1.05}`
});
tapBtn.addEventListener("mouseup",()=>{ 
    ucPic.style.scale=`${1}`
});
