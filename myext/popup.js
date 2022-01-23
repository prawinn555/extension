let actionButton = document.getElementById("actionButton");

// exemple pour acceder au stockage interne
// sous forme de clé/valeur.
// param1 : la clé
// param2 : la fonction pour traiter la valeur
chrome.storage.sync.get("data", ({ data }) => {
  // utiliser data.
  // cette fonctionnalité est non utilisée pour l'instant.
});



// initialiser l'action
actionButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['inject.js'],
  });
});





