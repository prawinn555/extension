let actionButton = document.getElementById("actionButton");


function handleButtonClick(event) {
  console.log('appliquer le paramétrage');
  alert('OK');
}


function init() {
      actionButton.addEventListener("click", handleButtonClick);
}

init();
