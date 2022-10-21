theInput.addEventListener('input', () => {
  h1.textContent = (theInput.value !== '')
    ? theInput.value
    : '?';
});
