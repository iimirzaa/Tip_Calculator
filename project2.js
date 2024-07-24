document.addEventListener("DOMContentLoaded",()=>{
    let btn=document.getElementsByTagName("button")[0];
    let amount=document.getElementById("amount");
    let percentage=document.getElementById("percentage");
    let Display=document.getElementsByTagName("p")[0];
    btn.addEventListener("click",()=>{
    
      amount=Number(amount.value);
      percentage=Number(percentage.value);
      let total=amount+ (amount*(percentage/100));
      Display.innerText="Total Amount: "+total;
    })
})