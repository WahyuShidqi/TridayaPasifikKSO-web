// Toggle language panel visibility with fade-up animation
function toggleLanguagePanel(event) {
  const panel = document.getElementById("languagePanel");
  const button = document.querySelector(".language-btn");

  // If the clicked target is not the language button and not inside the panel, close the panel
  if (!panel.contains(event.target) && !button.contains(event.target)) {
    panel.classList.remove("show");
    panel.style.right = "20px"; // Reset panel position
  } else {
    // Otherwise, toggle the panel's visibility
    panel.classList.toggle("show");

    // Adjust the panel's position when shown or hidden
    if (panel.classList.contains("show")) {
      panel.style.right = "70px"; // Move the panel to the left of the globe
    } else {
      panel.style.right = "20px";
    }
  }
}

// Listen for clicks on the entire document
document.addEventListener("click", toggleLanguagePanel);

// Prevent the button click from propagating to the document click listener
document
  .querySelector(".language-btn")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Stop the click from bubbling up to the document
    toggleLanguagePanel(event);
  });

// jangan sentuh bawah ini
// Set the language based on the selected button
function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = getTranslation(key, lang);
  });
}

// Helper function to get translation recursively
function getTranslation(key, lang) {
  const keys = key.split(".");
  let translation = translations[lang];

  for (const k of keys) {
    translation = translation ? translation[k] : "";
  }

  return translation || "";
}
// Default Language
setLanguage("en");
