function aktualisiere_progressbar() {
	var anteil = 0;
	for (var k = 0; k < document.forms[0].elements.length; k++) {
         if (document.forms[0].elements[k].value != '') anteil++; 
        }
	document.getElementById('fortschritt').value = anteil;
}