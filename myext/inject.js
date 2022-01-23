


var analyserBody = function(b) {
  let i=1;
  let info = [];
  let tables = Array.prototype.slice.call( document.getElementsByTagName("table") );
  tables.forEach( t => {
    console.log('table '+i, t);
    info.push('id ' + t.id +' className ' +t.className);
    i++;
  });
  return {
    nbTable : i-1,
    info
  };
}

// fonction à exécuter sur l'onglet en cours.
function traitementOngletEnCours() {
  try {
    console.log('extension accede à document', document.body);
    let r = analyserBody(document.body);
    console.log('info tables', r);
    alert('OK => voir les resultats en console. Analyse des tables =' + JSON.stringify(r) );
  } catch(e) {
    console.error('erreur de l\'extension', e);
    alert('erreur de l\'extension ' +e);
    
  }
}

traitementOngletEnCours();
