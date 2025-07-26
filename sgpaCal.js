
console.log("Let's Start and Don't forget to enjoy");
document.querySelector("#btn").addEventListener("click",calulationSGPA);
const gradeValues = {
    "A+" : 10,
    "A"  : 9 ,
    "B+" : 8,
    "B"  : 7,
    "C+":6,
    "C" : 5,
    "F" : 0,

}
function calulationSGPA(){
    let totalCredits = 0;
let totalScore = 0;

  const rows = document.querySelectorAll("tbody tr")
  rows.forEach((row, index)=>{
     let creditInput = row.querySelector("input");
     let gradeSelect = row.querySelector("select")

     let credit = Number(creditInput.value);
     let gradeVal = gradeValues[gradeSelect.value];
     
     if(!credit || !gradeValues[gradeSelect.value])return;
     totalCredits += credit;
     totalScore += (credit*gradeVal);

  })
  
  let finalAns  = (totalCredits>0)? (totalScore/totalCredits).toFixed(2):"0.00";
  document.querySelector("#res").textContent = finalAns;
}

