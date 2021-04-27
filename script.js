let btns = document.querySelectorAll(".btn")
let input = document.querySelector(".user-input")
let btnEqual = document.querySelector(".equal")
let btnClear = document.querySelector(".clear")

btns.forEach(btn=>{
    btn.addEventListener("click", function(){
        input.value = input.value + this.value
    })
})

btnEqual.addEventListener("click", function(){
    input.value = eval(input.value)
})

btnClear.addEventListener("click", function(){
    input.value = ""
})