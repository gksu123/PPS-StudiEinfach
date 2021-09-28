/*-----------Pop-up------------------*/ 

/*  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout1*/

/*var myVar;

function myFunction() {
 // myVar = setInterval(alertFunc, 10800000);
  myVar = setInterval(alertFunc, 5000);
}

function myFunction1() {
  myVar2 = clearInterval(myVar)
}

function alertFunc() {
  alert("Mach eine Übung und vergiss nicht genug zu trinken!");
}*/





/*function interval(){
  var myVar = setInterval(myFunction, 5000);
}*/

function myFunction() {
  var txt;
  if (confirm("Nimm dir doch mal eine Pause! Mach eine Übung und vergiss nicht genug zu trinken!"))
   { myVar
    txt="Du hast die Erinnerung angenommen"
  } else {
    setTimeout(alertFunc,3000)
    txt="Du wirst in 3 sekunden noch einmal an deine Pause erinnert!"
  }
  document.getElementById("demo").innerHTML = txt;
}

function alertFunc() {
  alert("Ich möchte dich noch einmal an deine Pause erinnern!");
}


var myVar = setInterval(myFunction, 3000);

function myFunction1() {
  myVar2 = clearInterval(myVar)
  txt="Du hast die Erinnerung gerade ausgestellt."
  document.getElementById("demo").innerHTML = txt;
}



