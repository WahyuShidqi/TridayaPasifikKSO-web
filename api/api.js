document
  .getElementById("appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const product = document.getElementById("product").value;
    const date = document.getElementById("date").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled out (basic validation)
    if (!name || !location || !product || !date || !userEmail || !message) {
      alert("All fields must be filled out!");
      return;
    }

    // Send data to the backend
    fetch("https://tridaya-mail-server.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        location,
        product,
        date,
        userEmail,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => alert("Error: " + error));
  });
