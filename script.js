function generateResume() {
    // Getting input values
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value;
    // Setting output values
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputContact").innerText = contact;
    document.getElementById("outputEmail").innerText = email;
    document.getElementById("outputEducation").innerText = education;
    document.getElementById("outputWorkExperience").innerText = workExperience;
    document.getElementById("outputSkills").innerText = skills;
    // Display output section
    var outputSection = document.getElementById("outputSection");
    if (outputSection)
        outputSection.style.display = "block";
}
function downloadPDF() {
    var outputSection = document.getElementById("outputSection");
    if (outputSection) {
        var options = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
    }
}
