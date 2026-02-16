javascript: setInterval(() => {
  document.querySelectorAll("*").forEach((el) => {
    const isCodeElement =
      el.tagName === "CODE" ||
      el.tagName === "PRE" ||
      el.classList.contains("code") ||
      el.classList.contains("highlight") ||
      el.classList.contains("language-") ||
      el.closest("pre") ||
      el.closest("code") ||
      getComputedStyle(el).fontFamily.includes("mono");
    if (
      !isCodeElement &&
      el.textContent &&
      /[\u0590-\u05FF]/.test(el.textContent)
    ) {
      el.style.direction = "rtl";
      el.style.textAlign = "right";
    }
  });
}, 500);
