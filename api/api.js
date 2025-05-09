document
  .getElementById("appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const product = document.getElementById("product").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (
      !name ||
      !location ||
      !product ||
      !phoneNumber ||
      !userEmail ||
      !message
    ) {
      alert("All fields must be filled out!");
      return;
    }

    fetch("https://tridaya-mail-server.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        location,
        product,
        phoneNumber,
        userEmail,
        message,
      }),
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        return response.text();
      })
      .then((text) => {
        console.log("Raw Response:", text);
        try {
          const json = JSON.parse(text);
          alert(json.message);
        } catch (error) {
          console.error("JSON Parsing Error:", error, "Raw Response:", text);
          alert("Error: Response is not valid JSON.");
        }
      })
      .catch((error) => alert("Fetch Error: " + error));
  });
