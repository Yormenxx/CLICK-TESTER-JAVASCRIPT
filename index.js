
const input = document.getElementById("btn-click")

const btnCount = document.getElementById("btn-count")

const btnReset = document.getElementById("reset")



let cont = 0;


input.addEventListener("click",()=>{
    cont++;
    btnCount.textContent= cont
})

btnReset.addEventListener("click",()=>{
    btnCount.textContent=0
    cont=0
})


