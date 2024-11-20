function volume_sphere() {
  let radius = document.getElementById('radius');
  let volume = document.getElementById('volume');

  // Clear the previous result
  volume.value = '';

  // Retrieve and validate the input
  let radiusValue = parseFloat(radius.value);

  if (isNaN(radiusValue) || radiusValue < 0) {
    volume.value = 'NaN';
    return false; // Prevent form submission
  }

  // Calculate the volume using the formula: V = (4/3) * π * r^3
  let volumeValue = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);

  // Format the result to 4 decimal places
  volume.value = volumeValue.toFixed(4);

  return false; // Prevent form submission
}

// Attach the function to the form's submit event
document.getElementById('MyForm').onsubmit = volume_sphere;
