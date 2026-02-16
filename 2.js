javascript: setInterval(() => {
  document.querySelectorAll("*").forEach((el) => {
    const isCodeElement =
      el.tagName === "CODE" ||
      el.tagName === "PRE" ||
      el.classList.contains("code") ||
      el.classList.contains("highlight") ||
      [...el.classList].some((c) => c.startsWith("language-")) ||
      el.closest("pre") ||
      el.closest("code") ||
      getComputedStyle(el).fontFamily.includes("mono");
    if (isCodeElement) {
      el.style.direction = "ltr";
      el.style.textAlign = "left";
      return;
    }
    const directText = [...el.childNodes]
      .filter((n) => n.nodeType === Node.TEXT_NODE)
      .map((n) => n.textContent)
      .join("");
    if (directText && /[\u0590-\u05FF]/.test(directText)) {
      el.style.direction = "rtl";
      el.style.textAlign = "right";
    }
  });
}, 500);
