import { useEffect } from "react";

/* global google */

function GoogleTranslate() {
  useEffect(() => {
    const loadGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,hi,bn,fr,es", layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
          "google_translate_element"
        );
      } else {
        setTimeout(loadGoogleTranslate, 500); // Retry initialization after 500ms
      }
    };

    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
  
    }

    window.googleTranslateElementInit = loadGoogleTranslate;

    setTimeout(loadGoogleTranslate, 1000); // Ensure initialization
  }, []);

  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;
