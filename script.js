document.querySelector("#btn-sgpa").addEventListener("click",calculateSGPA);
function calculateSGPA(){
    const gradePoints = {
        "A+":10,
        "A":9,
        "B+":8,
        "B":7,
        "C+":6,
        "C":5,
    }
    let totalCredits = 0;
    let totalPoints = 0;
    for(let i=1;i<=6;i++){
      const credit = parseFloat(document.querySelector(`#marks${i}`).value);
      const grade = document.querySelector(`#grade${i}`).value;
    
      if(isNaN(credit) || !(grade in gradePoints))continue;
      
      const gradepoint = gradePoints[grade];
      totalCredits += credit;
      totalPoints += credit*gradepoint;
    }
    
    const sgpa = totalCredits>0 ? (totalPoints/totalCredits):0;
    
    var ans = document.querySelector("#ans")
    ans.innerHTML = sgpa.toFixed(2);
    ans.style.color = "#fffffe";
    
}

