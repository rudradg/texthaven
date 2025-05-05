function insertSymbol() {
    const textarea = document.getElementById("main"); 
    const select = document.getElementById("symbolPicker");
    const symbol = eval(`"${select.value}"`);

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    textarea.value = text.slice(0, start) + symbol + text.slice(end);
    textarea.selectionStart = textarea.selectionEnd = start + symbol.length;
    textarea.focus();
  }