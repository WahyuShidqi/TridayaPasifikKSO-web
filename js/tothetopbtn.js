// Create the button element dynamically
const toTopButton = document.createElement("button");
toTopButton.id = "toTopButton";
toTopButton.innerText = "↑";

// Style the button
Object.assign(toTopButton.style, {
  position: "fixed",
  bottom: "5.5rem",
  right: "20px",
  backgroundColor: "#f39c12",
  color: "white",
  border: "none",
  padding: "1rem 1.5rem",
  borderRadius: "50%",
  cursor: "pointer",
  display: "none", // Hidden by default
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  fontSize: "16px",
  zIndex: "1000",
});

toTopButton.addEventListener("mouseenter", () => {
  toTopButton.style.backgroundColor = "#d35400";
});

toTopButton.addEventListener("mouseleave", () => {
  toTopButton.style.backgroundColor = "#f39c12";
});

// Append the button to the body
document.body.appendChild(toTopButton);

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const screenHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition > screenHeight * 0.35) {
    toTopButton.style.display = "block"; // Show the button
  } else {
    toTopButton.style.display = "none"; // Hide the button
  }
});

// Scroll to the top when the button is clicked
toTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
});
