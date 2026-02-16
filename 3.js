javascript: setInterval(() => {
  document.querySelectorAll("*").forEach((el) => {
    if (
      el.tagName === "CODE" ||
      el.tagName === "PRE" ||
      el.closest("pre") ||
      el.closest("code")
    ) {
      el.style.direction = "ltr";
      el.style.textAlign = "left";
      return;
    }
    if (el.textContent && /[\u0590-\u05FF]/.test(el.textContent)) {
      el.style.direction = "rtl";
      el.style.textAlign = "right";
    }
  });
}, 500);
