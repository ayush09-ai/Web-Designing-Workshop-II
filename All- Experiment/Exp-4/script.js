function calculateResult() {

    let numSubjects = parseInt(document.getElementById("numSubjects").value);

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Enter valid number of subjects");
        return;
    }

    let totalMarks = 0;

    for (let i = 1; i <= numSubjects; i++) {
        let mark = parseFloat(prompt("Enter marks for Subject " + i));

        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks!");
            return;
        }

        totalMarks += mark;
    }

    let averageMarks = totalMarks / numSubjects;

    let grade;

    if (averageMarks >= 90) grade = "A";
    else if (averageMarks >= 75) grade = "B";
    else if (averageMarks >= 60) grade = "C";
    else if (averageMarks >= 40) grade = "D";
    else grade = "F";

    let resultStatus = (averageMarks >= 40) ? "PASS" : "FAIL";

    let resultBox = document.getElementById("resultBox");

    resultBox.innerHTML = `
        <div class="alert alert-info">
            <h4>Total Marks: ${totalMarks}</h4>
            <h4>Average: ${averageMarks.toFixed(2)}</h4>
            <h4>Grade: ${grade}</h4>
            <h4>Status: ${resultStatus}</h4>
        </div>
    `;

    resultBox.classList.remove("d-none");
}