let kontakForm = document.querySelector(".appointment");
let timeInput;

// function to get user time
function timeFormat() {
  let userTime = new Date();

  let userHours = String(userTime.getHours()).padStart(2, "0");
  let userMinutes = String(userTime.getMinutes()).padStart(2, "0");

  let timeFormat = `${userHours}:${userMinutes}`;

  timeInput = timeFormat;
}

timeFormat();

kontakForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //   panggil valuenya dari input

  let userName = document.querySelector("#name").value;
  let userLocation = document.querySelector("#location").value;
  let userDate = document.querySelector("#date").value;
  let userSubject = document.querySelector("#subject").value;
  let userMessage = document.querySelector("#message").value;
  let userTime = timeInput;

  //  bikin isi emailnya
  let emailHeader = encodeURIComponent(userSubject + " from " + userName);
  let emailBody = encodeURIComponent(
    "Time: " +
      userTime +
      "\n" +
      "Date: " +
      userDate +
      "\n" +
      "Location: " +
      userLocation +
      "\n" +
      "\n" +
      "Dear Tridaya Pasifik KSO, " +
      "\n" +
      userMessage +
      "\n" +
      "\n" +
      "Best Regards, " +
      "\n" +
      userName
  );

  //   bikin target email yang dituju dan isinya

  let emailLink =
    "mailto:mkt.tridayapasifikkso@gmail.com?subject=" +
    emailHeader +
    "&body=" +
    emailBody;

  // buka email user
  window.location.href = emailLink;
});
