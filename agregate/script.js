document.addEventListener("DOMContentLoaded", () => {
    const animatedTexts = document.querySelectorAll(".animated-text");
    let delay = 100;

    animatedTexts.forEach((elem) => {
        setTimeout(() => {
            elem.classList.add("show");
            // For paragraphs, show the entire text at once
            if (elem.tagName.toLowerCase() === "p") {
                elem.textContent = elem.getAttribute("data-text");
            }
            // For list items, show the text
            if (elem.tagName.toLowerCase() === "li") {
                elem.textContent = elem.getAttribute("data-text");
            }
        }, delay);
        delay += 500; // Delay 0.5 detik antara setiap elemen
    });
});
