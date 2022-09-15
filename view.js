// hjelpevariable for både view og controller
var contentDiv = document.getElementById("content");

// view
show();
function show() {
  let svgInnerHtml = "";
  let disabledBtn = chosenBar == "" ? "disabled" : "";
  for (let i = 0; i < numbers.length; i++) {
    svgInnerHtml += createBar(numbers[i], i + 1);
  }
  contentDiv.innerHTML = `
          <div class="wrapper">
            ${errorText}
           <svg id="chart" width="500" viewBox="0 0 100 100">
               ${svgInnerHtml}
           </svg><br/>
           <div>Valgt stolpe: <i>${chosenBar || ""}</i></div>
           <br />
           <div class="container">
            <div style="display: flex; justify-content: right;">
              <input placeholder="Verdi mellom 1 - 10" type="number" min="1" max="10" oninput="inputValue = parseInt(this.value)"/>
              <button onclick="addBar()">Legg til stolpe</button>
            </div>
            <div style="display: flex; justify-content: right;">
              <button ${disabledBtn} onclick="editBar()">Endre valgt stolpe</button><br />
              <button onclick="removeBar()" ${disabledBtn}>Fjerne valgt stolpe</button>
            </div>
           </div>
          </div>
          `;
}

function createBar(number, barNo) {
  const width = 8;
  const spacing = 2;
  let x = (barNo - 1) * (width + spacing);
  let height = number * 10;
  let y = 100 - height;
  let color = calcColor(1, 10, barNo);
  let setStroke = chosenBar == barNo ? "stroke='black'" : "";
  return `<rect onclick="selectBar(${barNo})" ${setStroke} width="${width}" height="${height}"
                           x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
  var minHue = 240,
    maxHue = 0;
  var curPercent = (val - min) / (max - min);
  var colString =
    "hsl(" + (curPercent * (maxHue - minHue) + minHue) + ",100%,50%)";
  return colString;
}
