function dropMenu() {
	document.getElementById("projList").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropBtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
    		var openDropdown = dropdowns[i];
    		if (openDropdown.classList.contains('show')) {
        		openDropdown.classList.remove('show');
      		}
    	}
  	}
}

function check(form) { //function to check credentials
	if(form.username.value == "James" && form.password.value == "test") {
		window.open('adminOnly.html', '_self'); //open adminOnly page
		document.getElementById('main').setAttribute('hidden', 'false');
		document.getElementById('noAccess').setAttribute('hidden', 'true');
	}
	else {
		alert("Wrong Password or Username")
	}
}

function referCheck(referPage) {
	if(referPage == 'file:///E:/jamesbentontesting.com/loginPage.html/loginPage.html') {
		return true;
	}
	else {
		self.location='loginPage.html';
		alert("Please Sign in First");
	}
}