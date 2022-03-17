const getColorSchemeButton = document.getElementById('color-button');

getColorSchemeButton.addEventListener('click', function () {
  const seedColor = document.getElementById('seed-color').value.slice(1);
  const modeOption = document.getElementById('mode-option').value;
  const count = 5;

  let endPoint = `/scheme?hex=${seedColor}&mode=${modeOption}&count=${count}`;

  fetch(`https://www.thecolorapi.com${endPoint}`)
    .then((response) => response.json())
    .then((colours) => {
      for (let i = 0; i < count; i++) {
        const colorFill = colours.colors[i].hex.value;

        const colorBar = document.getElementById(`color${i}`);
        colorBar.style.backgroundColor = colorFill;

        const colorHex = document.getElementById(`hex${i}`);
        colorHex.innerText = colorFill;

        colorHex.addEventListener('click', function copyToClipboard() {
          const copyText = colorHex.innerText.slice(1);
          console.log(copyText);
          navigator.clipboard.writeText(copyText);
        });
      }
    });
});
