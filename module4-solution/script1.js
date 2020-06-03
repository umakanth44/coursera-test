var names = ["jon", "Ajay", "Jaya","Bhargav"];

function greatings(){
    var i=0;
    for(i;i<names.length;i++) {
	    if ((names[i].charAt(0) == "J") || (names[i].charAt(0) == "j")) {
		    console.log("Goodbye " + names[i]);
	    }else {
		    console.log("Hello " + names[i]);
	    }
    }
}