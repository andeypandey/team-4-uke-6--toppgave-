function selectBar(index) {
  chosenBar = chosenBar == index ? "" : index;
  show();
}

function addBar() {
  errorText = "";
  inputValue >= 1 && inputValue <= 10
    ? numbers.push(inputValue)
    : (errorText = "Input kan ikke være mindre enn 1 eller høyere enn 10");
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
    numbers.splice(chosenBar - 1, 1);
    numbers.splice(chosenBar - 1, 0, inputValue);
    chosenBar = "";
    inputValue = null;
  }
  show();
}
