let year = document.getElementById("year")
let sem = document.getElementById("sem");
let courseSelected = document.getElementById("course")
let credits = document.getElementById("credits")
let grade = document.getElementById("grade")
let add = document.querySelector(".add")
let calculate = document.querySelector(".calculate")
let result = document.getElementById("result")
let table = document.getElementById("contents")
let initial = document.getElementById("initial")

let firstYear = ["1st Semester", "2nd Semester"]
let secondYear = ["3rd Semester", "4th Semester"]
let thirdYear = ["5th Semester"]

let firstSem = ["Technical English - I", "Mathematics - I", "Engineering Physics - I", "Engineering Chemistry", "Python Programming and Problem Solving", "Basic Civil and Mechanical Engineering (Theory Cum Practical)", "Physics and Chemistry Laboratory", "Python Programming and Problem Solving Laboratory"]
let secondSem = ["Mathematics - II", "Engineering Physics - II", "Environmental Science and Engineering", "C Programming", "Engineering Graphics", "Professional skills - I", "Basic Electrical and Electronics Engineering -(Theory Cum Practical)", "C Programming Laboratory"]
let thirdSem = ["Tamil and Technology", "Professional Skills - II", "Discrete Mathematics and Graph Theory", "Analog Electronic Circuits", "Data Structures and Algorithm Analysis", "Computer Organization and Architecture", "Object Oriented Programming With Java", "Data Structures and Algorithms Laboratory", "Object Oriented Programming Laboratory", "Analog Electronics Circuits Laboratory", "Interpersonal Skills Laboratory"]
let fourthSem = ["Applied Probability Statistics and Numerical Analysis", "Database Management Systems", "Operating Systems", "Software Engineering", "Total Quality Management", "Professional Skills - III", "Operating Systems Laboratory", "Database Management Systems Laboratory", "Mini Project"]
let fifthSem = ["Theory of Automata", "Computer Networks", "Artificial Intelligence", "Mobile Computing", "Internet of Things", "Neural Networks", "Professional Skills - IV", "Mobile Computing Laboratory", "Computer Netwoks Laboratory"]

const gradeHash = {
    "O" : 10,
    "A+" : 9,
    "A" : 8,
    "B+" : 7,
    "B" : 6,
    "F" : 0
}

let sum = 0;
let credit = 0;


year.addEventListener("change", function() {

    sem.innerHTML = '<option value="" disables selected>Select Semester</option>'

    semester = []
    if(year.value === "option1") {
        semester = firstYear;
    }
    else if(year.value === "option2") {
        semester = secondYear;
    }
    else if(year.value === "option3") {
        semester = thirdYear;
    }

    semester.forEach(function(s) {
        let option = document.createElement("option")
        option.value = s;
        option.textContent = s;
        sem.appendChild(option)
    })
})

sem.addEventListener("change", function() {
    
    courseSelected.innerHTML = '<option value="" disabled selected>Select Course</option>'
    if(sem.value === "1st Semester") {
        courses = firstSem;
    }
    else if(sem.value === "2nd Semester") {
        courses = secondSem;
    }
    else if(sem.value === "3rd Semester") {
        courses = thirdSem;
    }
    else if(sem.value === "4th Semester") {
        courses = fourthSem;
    }
    else if(sem.value === "5th Semester") {
        courses = fifthSem;
    }

    courses.forEach(function(course) {
        let option = document.createElement("option")
        option.value = course;
        option.textContent = course;
        courseSelected.appendChild(option)
    })
})


add.addEventListener("click", function() {
    const creditVal = parseInt(credits.value)
    const gradeVal = grade.value
    const course = courseSelected.value

    if(course && creditVal && gradeHash[gradeVal]) {
        sum += creditVal * gradeHash[gradeVal]
        credit += creditVal
    
        initial.remove()

        if(initial.style.display !== "none") {
            initial.style.display = "none"
        }

        if(table.style.display !== "none") {
            table.style.display = "table"
        }

        let tr = document.createElement("tr")
        let d1 = document.createElement("td")
        let d2 = document.createElement("td")
        let d3 = document.createElement("td")
        let del = document.createElement("td")

        d1.textContent = course
        d2.textContent = creditVal
        d3.textContent = gradeVal

        const delBtn = document.createElement("button")
        delBtn.textContent = "DELETE"

        delBtn.style.padding = "10px";
        delBtn.style.color = "white";
        delBtn.style.backgroundColor = "rgb(85, 42, 165)";
        delBtn.style.outline = "none";
        delBtn.style.border = "none";
        delBtn.style.cursor = "pointer";
        delBtn.style.marginTop = "20px";
        delBtn.style.marginBottom = "20px";
        delBtn.style.textAlign = "center";
        delBtn.style.fontSize = "12px";
        
        
        delBtn.addEventListener("mouseover", function() {
            delBtn.style.backgroundColor =  "#6a0dad";
        })
            

        delBtn.addEventListener("click", function() {
            table.removeChild(tr)
            sum -= creditVal * gradeHash[gradeVal]
            credit -= creditVal

            if(table.rows.length === 1) {
                table.style.display = "none"
                initial.style.display = "block"
            }
        })

        del.appendChild(delBtn)

        tr.appendChild(d1)
        tr.appendChild(d2)
        tr.appendChild(d3)
        tr.appendChild(del)
        table.appendChild(tr)


        courseSelected.value = ""
        credits.value = ""
        grade.value = ""

    } else {
        alert("Please Enter Valid Credits and Select a Grade!")
    }

    
})

calculate.addEventListener("click", function() {
    if(credit > 0) {
        const gpa = (sum / credit).toFixed(2)
        result.textContent = gpa
    } else {
        result.textContent = "0"
    }
})


