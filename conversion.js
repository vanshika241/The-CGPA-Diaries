console.log("Let's start and don't forget to enjoy");

document.querySelector("#btn").addEventListener("click",createInput)
document.querySelector("#calculateBtn").addEventListener("click", calculateCGPA)

const finalAns = document.getElementById("res")
const btn  = document.getElementById("calculateBtn")

function createInput(){
    let inputSems = document.querySelector("#total");
    let sems = Number(inputSems.value);
    const table = document.getElementById("semTable")
    const tbody = document.getElementById("tableBody")

    tbody.innerHTML = ""
    if(sems<=0 || isNaN(sems))return;

    table.classList.remove("hidden");
    for(let i=1;i<=sems;i++){
        const row = document.createElement("tr")
        row.innerHTML = `
        <td class = "p-3">Semester ${i}</td>
        <td class = "p-3"><input type="number" name="" id="" placeholder="TotalCredits"  class="p-1 border border-gray-800 rounded w-auto credit-input "></td>
        <td class = "p-3"><input type="number" name="" id="" placeholder="Semester SGPA"  class="p-1 border border-gray-800 rounded w-auto sgpa-input"></td>



        `;
        tbody.appendChild(row);
    }

    btn.classList.remove("hidden")


    
}

function calculateCGPA(){
    const credits = document.querySelectorAll(".credit-input")
    const sgpa = document.querySelectorAll(".sgpa-input")
    let totalCredits = 0;
    let totalSGPA = 0;
    let valid = true;
    let CGPA = 0;

    for(let i=0;i<credits.length;i++){
        let currCredit = parseFloat(credits[i].value);
        let currSGPA = parseFloat(sgpa[i].value);

        if(isNaN(currCredit) || isNaN(currSGPA)){
            return;
        }
        CGPA += currCredit*currSGPA;
        totalCredits += currCredit;
        totalSGPA  += currSGPA;

    }

    let result = (CGPA/totalCredits).toFixed(2);
    
    finalAns.classList.remove("hidden")
    finalAns.textContent = `Your CGPA is ${result} `

}