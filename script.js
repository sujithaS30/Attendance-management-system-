// 1. Navigation Logic
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => {
        sec.style.display = 'none';
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

window.onload = () => showSection('home');

// 2. Register Form - Backend Connect (Modified for rollNo)
document.querySelector("#register form").addEventListener("submit", function(e){
    e.preventDefault();

    let nameValue = this.querySelector("input[type='text']").value;
    let emailValue = this.querySelector("input[type='email']").value; // Form-la email field

    if(nameValue === "" || emailValue === ""){
        alert("Please fill all fields");
        return;
    }

    // Java Entity-la 'email' illa, 'rollNo' thaan irukku. 
    // So email-ah rollNo-va anuprom.
    const studentData = { 
        name: nameValue, 
        rollNo: emailValue, 
        status: "Present" 
    };

    fetch('http://localhost:8082/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData)
    })
    .then(response => {
        if(response.ok) {
            alert("Registration Successful!");
            showSection('login');
        } else {
            alert("Error: Backend map aagala. Check rollNo field.");
        }
    })
    .catch(err => alert("Connection Failed!"));
});

// 3. View Attendance - Displaying rollNo and status
function viewAttendance() {
    fetch('http://localhost:8082/api/students')
        .then(res => res.json())
        .then(data => {
            const tableBody = document.getElementById('studentTableBody');
            const listDiv = document.getElementById('attendanceList');
            
            tableBody.innerHTML = ""; 
            
            data.forEach(student => {
                // Java Entity variable names (id, name, rollNo, status)
                let row = `<tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.rollNo}</td> 
                    <td>${student.status || 'N/A'}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });

            listDiv.style.display = 'block';
        })
        .catch(err => alert("Error fetching data: " + err));
}

function markAttendance(){ alert("Marking Attendance..."); }
function addStudent(){ showSection('register'); }