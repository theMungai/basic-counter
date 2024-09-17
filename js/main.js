let numberOfStudents = document.getElementById("number-of-students");
let count = -1;


function increment()
{
    count = count + 1;
    numberOfStudents.textContent = count;
}

increment()