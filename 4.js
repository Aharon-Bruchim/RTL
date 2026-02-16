javascript: setInterval(() => {
  const isClaude = location.hostname.includes("claude.ai");
  document.querySelectorAll("*").forEach((el) => {
    const isCodeElement =
      el.tagName === "CODE" ||
      el.tagName === "PRE" ||
      el.tagName === "KBD" ||
      el.tagName === "SAMP" ||
      el.tagName === "VAR" ||
      el.closest("pre") ||
      el.closest("code") ||
      el.classList.contains("hljs") ||
      el.classList.contains("highlight") ||
      el.classList.contains("code") ||
      [...el.classList].some(
        (c) =>
          c.startsWith("language-") ||
          c.startsWith("lang-") ||
          c.startsWith("hljs-"),
      ) ||
      el.hasAttribute("data-language") ||
      getComputedStyle(el).fontFamily.includes("mono");

    if (isCodeElement) {
      el.style.direction = "ltr";
      el.style.textAlign = "left";
      return;
    }

    let hasHebrew = false;
    if (isClaude) {
      const directText = [...el.childNodes]
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent)
        .join("");
      hasHebrew = directText && /[\u0590-\u05FF]/.test(directText);
    } else {
      hasHebrew = el.textContent && /[\u0590-\u05FF]/.test(el.textContent);
    }

    if (hasHebrew) {
      el.style.direction = "rtl";
      el.style.textAlign = "right";
    }
  });
}, 500);
