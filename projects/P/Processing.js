document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Collect form data into an object
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });

  // Validate form data
  if (!data.name || !data.email || !data.message) {
      alert("Please fill out all required fields (Name, Email, and Message).");
      return;
  }

  // Validate age (ensure it is a number between 18 and 100)
  const age = parseInt(data.age);
  if (isNaN(age) || age < 18 || age > 100) {
      alert("Please enter a valid age between 18 and 100.");
      return;
  }

  // Log the form data to the console
  console.log(data);

  // AJAX request to send form data to server
  const xhr = new XMLHttpRequest();

  // Open the XHR request to mock response.json (using GET here for GitHub Pages compatibility)
  xhr.open('GET', 'response.json', true);

  // Handle the response
  xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText);

          // Check if the response is successful
          if (response.status === 'success') {
              // Display the success message
              const responseMessageDiv = document.getElementById('responseMessage');
              responseMessageDiv.style.display = 'block';
              responseMessageDiv.innerHTML = response.message;

              // Reset the form after successful submission
              document.getElementById('contactForm').reset();

              // Optionally, disable form fields after submission
              document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm button').forEach(input => {
                  input.disabled = true;
              });
          }
      } else {
          console.error('Error: ' + xhr.statusText);
      }
  };

  // Handle errors
  xhr.onerror = function() {
      console.error('Request failed');
  };

  // Send the form data as JSON (Here we're sending data as JSON, but using GET for GitHub Pages)
  xhr.send();
});
