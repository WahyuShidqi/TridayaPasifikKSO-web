document
  .getElementById("appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form field values
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var product = document.getElementById("product").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var message = document.getElementById("message").value;

    // Compose the email content
    var emailSubject = encodeURIComponent("Product order from " + name);
    var emailBody = encodeURIComponent(
      "Name: " +
        name +
        "\n" +
        "Location: " +
        location +
        "\n" +
        "Product: " +
        product +
        "\n" +
        "Date: " +
        date +
        "\n" +
        "Time: " +
        time +
        "\n" +
        "\n" +
        "Dear Tridaya Pasifik KSO, " +
        "\n" +
        message +
        "\n" +
        "\n" +
        "Best Regards, " +
        "\n" +
        name
    );

    // Create the mailto link
    var mailtoLink =
      "mailto:mkt.tridayapasifikkso@gmail.com?subject=" +
      emailSubject +
      "&body=" +
      emailBody;

    // Open the email client (the user’s email client will pop up)
    window.location.href = mailtoLink;
  });

document.addEventListener("DOMContentLoaded", function () {
  // Get current time from the user's device
  let now = new Date();

  // Format time as HH:MM (24-hour format)
  let hours = String(now.getHours()).padStart(2, "0"); // Adds leading zero if needed
  let minutes = String(now.getMinutes()).padStart(2, "0");

  let formattedTime = `${hours}:${minutes}`;

  // Set input value
  document.getElementById("time").value = formattedTime;
});
