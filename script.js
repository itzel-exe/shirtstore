document.addEventListener("DOMContentLoaded", function () {
  const originalText = document.getElementById("typed-text").textContent;
  document.getElementById("typed-text").textContent = "";

  new Typed("#typed-text", {
    strings: [originalText],
    typeSpeed: 125,
    backSpeed: 25,
    loop: false,
    showCursor: false,
    onStart: function () {
      document.getElementById("typing-container").style.opacity = 1;
    },
    onComplete: function () {
      // Wait a moment, then redirect
      setTimeout(() => {
        window.location.href = "main.html";
      }, 1000); // Delay for effect (1 second)
    }
  });
});
