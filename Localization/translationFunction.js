// Toggle the language panel visibility
function toggleLanguagePanel(event) {
  const panel = document.getElementById("languagePanel");
  const button = document.querySelector(".language-btn");

  // If the clicked target is not the language button and not inside the panel, close the panel
  if (!panel.contains(event.target) && !button.contains(event.target)) {
    panel.classList.remove("show");
    panel.style.right = "20px"; // Reset panel position
    localStorage.setItem("panelState", "closed"); // Store panel state
  } else {
    // Otherwise, toggle the panel's visibility
    panel.classList.toggle("show");

    // Adjust the panel's position when shown or hidden
    if (panel.classList.contains("show")) {
      panel.style.right = "70px"; // Move the panel to the left of the globe
      localStorage.setItem("panelState", "open"); // Store panel state
    } else {
      panel.style.right = "20px";
      localStorage.setItem("panelState", "closed");
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

// Set the language based on the selected button
function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    if (el.hasAttribute("data-exclude")) return; // Skip elements with data-exclude

    const key = el.getAttribute("data-translate");
    const translation = getTranslation(key, lang);

    if (translation) {
      // Set the translated content, interpreting any HTML tags (e.g., <b>, <i>, etc.)
      el.innerHTML = translation; // Use innerHTML to render HTML tags like <b>, <i>, etc.
    } else {
      // If no translation is found, fallback to the original content
      el.innerHTML = el.innerHTML; // Preserve the original HTML content
    }
  });

  // Store the selected language in localStorage
  localStorage.setItem("language", lang);
}

// Helper function to get translation recursively
function getTranslation(key, lang) {
  const keys = key.split(".");
  let translation = translations[lang];

  for (const k of keys) {
    translation = translation ? translation[k] : "";
  }

  return translation || ""; // Return empty string if no translation is found
}

// Default Language and Panel State Handling
window.onload = () => {
  const savedLanguage = localStorage.getItem("language") || "en"; // Default to English if no language saved
  setLanguage(savedLanguage);

  const panelState = localStorage.getItem("panelState") || "closed";
  const panel = document.getElementById("languagePanel");
  if (panelState === "open") {
    panel.classList.add("show");
    panel.style.right = "70px";
  } else {
    panel.classList.remove("show");
    panel.style.right = "20px";
  }
};
