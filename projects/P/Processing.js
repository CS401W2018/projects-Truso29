document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });

  // Create a new XHR request
  const xhr = new XMLHttpRequest();
  
  // Open a request to a mock server or local .json file
  xhr.open('POST', 'response.json', true); // Adjust the URL to your actual endpoint if needed
  
  // Set the request header to inform the server the body contains JSON
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  // Handle the response from the server
  xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
          // Parse the JSON response
          const response = JSON.parse(xhr.responseText);

          // Check if the response status is 'success'
          if (response.status === 'success') {
              // Display success message
              const responseMessageDiv = document.getElementById('responseMessage');
              responseMessageDiv.style.display = 'block';
              responseMessageDiv.innerHTML = response.message;

              // Optionally, reset the form or disable fields
              document.getElementById('contactForm').reset();
              // Or disable the form elements
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

  // Send the form data as JSON
  xhr.send(JSON.stringify(data));
});
