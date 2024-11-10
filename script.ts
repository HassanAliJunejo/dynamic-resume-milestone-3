function generateResume() {
    // Getting input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Setting output values
    (document.getElementById("outputName") as HTMLElement).innerText = name;
    (document.getElementById("outputContact") as HTMLElement).innerText = contact;
    (document.getElementById("outputEmail") as HTMLElement).innerText = email;
    (document.getElementById("outputEducation") as HTMLElement).innerText = education;
    (document.getElementById("outputWorkExperience") as HTMLElement).innerText = workExperience;
    (document.getElementById("outputSkills") as HTMLElement).innerText = skills;

    // Display output section
    const outputSection = document.getElementById("outputSection");
    if (outputSection) outputSection.style.display = "block";
}

function downloadPDF() {
    const outputSection = document.getElementById("outputSection");
    if (outputSection) {
        const options = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

    }
}
