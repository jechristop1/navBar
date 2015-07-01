var button = document.getElementById('menuButton');
var menuLinks = document.getElementById('showLinks');
var width = window.innerWidth;
button.addEventListener('click', showHide);




function showHide(){
	if(menuLinks.classList.contains('hide')){
		menuLinks.classList.remove('hide');
		menuLinks.classList.add('show');		
	} else if(menuLinks.classList.contains('show')){
		menuLinks.classList.remove('show');
		menuLinks.classList.add('hide');		
	}
};