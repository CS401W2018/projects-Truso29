// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const responseMessage = document.getElementById("responseMessage");
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission
  
      // Collect form data into an objectr
      const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        age: parseInt(document.getElementById("age").value, 10),
      };
  
      // Validate inputs
      let errors = [];
      if (!formData.name) errors.push("Name is required.");
      if (!formData.email) errors.push("Email is required.");
      if (!formData.age || formData.age < 18 || formData.age > 99) {
        errors.push("Age must be between 18 and 99.");
      }
  
      // If there are errors, alert the user
      if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
      }
  
      console.log("Form data:", formData);
  
      // Mock an AJAX call with a JSON response
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "response.json", true); // Use "GET" for GitHub hosting
      xhr.setRequestHeader("Content-Type", "application/json");
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          responseMessage.textContent = response.message; // Display response message
          form.reset(); // Clear the form
        } else {
          alert("Error: Unable to process the request.");
        }
      };
  
      xhr.onerror = () => {
        alert("Error: Unable to process the request.");
      };
  
      xhr.send(); // Send request
    
    });
  });
  