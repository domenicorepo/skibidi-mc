// Copies text to the clipboard when the button is clicked.
const copyButton = document.getElementById("btn");

// Change this to whatever text you want to copy.
const textToCopy = "play.skibidmc.org";

async function copyText(text) {
  try {
    // Modern way (needs HTTPS or localhost)
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers / non-secure contexts
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(temp);
    return ok;
  }
}

copyButton.addEventListener("click", async () => {
  const success = await copyText(textToCopy);
  const originalLabel = copyButton.textContent;
  copyButton.textContent = success ? "Copied!" : "Copy failed";
  setTimeout(() => {
    copyButton.textContent = originalLabel;
  }, 1500);
});