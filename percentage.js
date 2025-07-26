console.log("Let's start Don't forget to enjoy");
document.querySelector("#btn").addEventListener("click",calcPercentage)

function calcPercentage(){

    let inputCGPA = document.querySelector("#cgpa");
    let inputScale = document.querySelector('input[name="scale"]:checked');

    let cgpaVal = Number(inputCGPA.value);
    let scale = Number(inputScale.value)
    if(!cgpaVal || !scale)return;
     let percentage = 0;
    if(scale == 10){
         percentage = cgpaVal*9.5;
    }
    else{
        percentage = (cgpaVal/5)*20;
    }

    percentage = percentage.toFixed(2);
    document.querySelector("#res").textContent = `Your Percentage is ${percentage}%`

}