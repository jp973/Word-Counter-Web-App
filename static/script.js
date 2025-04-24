document.getElementById("textInput").addEventListener("input", function () {
    let text = this.value.trim();
    
    // Count words (split by spaces and filter empty values)
    let wordCount = text === "" ? 0 : text.split(/\s+/).length;
    
    // Count characters (excluding spaces)
    let charCount = text.replace(/\s+/g, "").length;

    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("charCount").innerText = charCount;
});
