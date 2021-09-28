/*https://wiki.selfhtml.org/wiki/JavaScript/File_Upload*/

function dateiauswahl1(evt) {
    
    var files1 = evt.target.files;
    var fragmente = [];
   
    for (var i = 0, f; f = files1[i]; i++) {
        fragmente.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a',
            ') - ', f.size, ' bytes</li>');
    }
  
    document.getElementById('dateiListe1')
        .innerHTML = '<ul>' + fragmente.join('') + '</ul>';
}

document.addEventListener("DOMContentLoaded", function () {

document.getElementById('dateien1')
    .addEventListener('change', dateiauswahl1, false);
});


function dateiauswahl(evt) {
    var files = evt.target.files;
    var fragmente = [];

  
    for (var i = 0, f; f = files[i]; i++) {
        fragmente.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a',
            ') - ', f.size, ' bytes</li>');
    }
 
    document.getElementById('dateiListe')
        .innerHTML = '<ul>' + fragmente.join('') + '</ul>';
}

document.addEventListener("DOMContentLoaded", function () {

document.getElementById('dateien')
    .addEventListener('change', dateiauswahl, false);
});
