let output = '';

function press(value) {
  output += value;
  document.getElementById('result').value = output;
}

function calculate() {
  try {
    output = eval(output); // Evaluate the expression
    document.getElementById('result').value = output;
  } catch {
    document.getElementById('result').value = "Error";
  }
}

function clearResult() {
  output = '';
  document.getElementById('result').value = '';
}