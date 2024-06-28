const btn= document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
   " Doubt kills more dreams than failure ever will.","Small acts, done consistently, will produce great results.","It is never too late to be what you might have been.","The best way to predict the future is to create it.","The future belongs to those who believe in the beauty of their dreams.","Do one thing every day that scares you."
]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})