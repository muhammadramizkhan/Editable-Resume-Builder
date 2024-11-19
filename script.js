"use strict";
// Get form and preview elements
const form = document.getElementById("resumeForm");
const resumePage = document.getElementById("resumePage");
const resumePhoto = document.getElementById("resumePhoto");
const resumeName = document.getElementById("resumeName");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumeEducation = document.getElementById("resumeEducation");
const resumeWorkExperience = document.getElementById("resumeWorkExperience");
const resumeSkills = document.getElementById("resumeSkills");
// Function to update the form fields with current resume data
function updateFormFromResume() {
    var _a, _b, _c;
    const [degree, education] = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split(" from ")) || [];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_b = resumeEmail.textContent) === null || _b === void 0 ? void 0 : _b.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_c = resumePhone.textContent) === null || _c === void 0 ? void 0 : _c.replace('Phone: ', '')) || '';
    document.getElementById("degree").value = degree || '';
    document.getElementById("education").value = education || '';
    document.getElementById("workExperience").value = resumeWorkExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
// Handle form submission
form.addEventListener("submit", (event) => {
    var _a;
    event.preventDefault();
    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("workExperience").value;
    const skills = document.getElementById("skills").value;
    const photoInput = document.getElementById("photo");
    // Handle photo
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    const photoURL = photoFile ? URL.createObjectURL(photoFile) : '';
    // Populate the resume preview
    resumePhoto.src = photoURL;
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = `${degree} from ${education}`;
    resumeWorkExperience.textContent = workExperience;
    resumeSkills.textContent = skills;
    // Hide form and show resume page
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    resumePage.classList.remove("hidden");
});
// Add back button functionality to go back to the form
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", () => {
    var _a;
    // Show the form again and hide the resume preview
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Add edit button functionality
const editButton = document.getElementById("editButton");
editButton.addEventListener("click", () => {
    var _a;
    // Populate the form with current resume data for editing
    updateFormFromResume();
    // Show the form again for editing
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Make sections editable and update form on change
const editableElements = [
    { element: resumeName, id: "name" },
    { element: resumeEmail, id: "email" },
    { element: resumePhone, id: "phone" },
    { element: resumeEducation, id: "education" },
    { element: resumeWorkExperience, id: "workExperience" },
    { element: resumeSkills, id: "skills" },
];
editableElements.forEach(({ element, id }) => {
    element.addEventListener("input", () => {
        // Update the form field when the resume section is edited
        const formField = document.getElementById(id);
        if (formField) {
            formField.value = element.textContent || '';
        }
    });
});
