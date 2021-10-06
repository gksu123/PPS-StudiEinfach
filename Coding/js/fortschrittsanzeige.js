/*

function aktualisiere_progressbar() {
	var anteil = 0;
	for (var k = 0; k < document.forms[0].elements.length; k++) {
         if (document.forms[0].elements[k].value != '') anteil++; 
        }
	document.getElementById('fortschritt').value = anteil;
}*/

$(document).ready(function() {
  
	// get box count
	var count = 0;
	var checked = 0;
	function countBoxes() { 
	  count = $("input[type='checkbox']").length;
	  console.log(count);
	}
	
	countBoxes();
	$(":checkbox").click(countBoxes);
	
	// count checks
	
	function countChecked() {
	  checked = $("input:checked").length;
	  
	  var percentage = parseInt(((checked / count) * 100),10);
	  $(".progressbar-bar").progressbar({
			  value: percentage
		  });
	  $(".progressbar-label").text(percentage + "%");
	}
	
	countChecked();
	$(":checkbox").click(countChecked);
  });