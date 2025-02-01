// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace "YOUR_USER_ID" with your EmailJS user ID

// Form submission logic
document
  .getElementById("appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Create an object with the form data
    const formData = new FormData(event.target);
    const messageData = {
      product: formData.get("product"),
      name: formData.get("name"),
      location: formData.get("location"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    };

    // Send email using EmailJS
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", messageData) // Replace with your service and template IDs
      .then(
        function (response) {
          alert("Email sent successfully!"); // Notify the user on success
        },
        function (error) {
          alert("Failed to send email: " + error.text); // Notify the user on error
        }
      );
  });
