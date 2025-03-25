const currentTime=()=>{
    const time = new Date();
    document.querySelector(".time-text").innerText=time.toLocaleTimeString();
}
let myClock= setInterval(currentTime,1000);
document.querySelector(".container").addEventListener('click',()=>{
clearInterval(myClock);
})