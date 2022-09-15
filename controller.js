function selectBar(index) {
  chosenBar = chosenBar == index ? "" : index;
  show();
}

function addBar() {
  errorText = "";
  inputValue >= 1 && inputValue <= 10
    ? numbers.push(inputValue)
    : (errorText = `<h3 style="color: red;">Input kan ikke være mindre enn 1 eller høyere enn 10</h3>`);
  inputValue = null;
  show();
}

function removeBar() {
  numbers.splice(chosenBar - 1, 1);
  chosenBar = "";
  show();
}

function editBar() {
  if (inputValue >= 1 && inputValue <= 10) {
    // Kan også brukes
    // numbers.splice(chosenBar - 1, 1, inputValue);
    numbers[chosenBar - 1] = inputValue; //mye enklere måte å endre noe i et array.
    chosenBar = "";
    inputValue = null;
  }
  show();
}
