function geserdeh() {
	var menyunya = document.getElementById('slideInMenyu');
	var soklucu = document.getElementById('geser');

	if (menyunya.style.left == '-300px') {
		soklucu.style.left = '300px';
		menyunya.style.left = '0px';
	} else {
		soklucu.style.left = '0';
		menyunya.style.left = '-300px';		
	}
}

const menyunya_btn = document.getElementById('klikuntukmenu');
menyunya_btn.addEventListener('click', geserdeh);

// default belom click
document.getElementById('pageRendered').innerHTML = pageIndex;

// THESE ARE PAGE MENUS //

// kl click home
const btnMnHome = document.getElementById('mnHome');
btnMnHome.addEventListener('click', ()=>{
	document.getElementById('pageRendered').innerHTML = pageIndex;

});

//kl click about
const btnMnAbout = document.getElementById('mnAbout');
btnMnAbout.addEventListener('click', ()=>{
	document.getElementById('pageRendered').innerHTML = pageAbout;
});

//kl click food
const btnMnFood = document.getElementById('mnFood');
btnMnFood.addEventListener('click', ()=>{
	document.getElementById('pageRendered').innerHTML = pageFood;
});

const btnMnLocations = document.getElementById('mnLocations');
btnMnLocations.addEventListener('click', ()=>{
	document.getElementById('pageRendered').innerHTML = pageLocations;
});

// PAGE MENUS - END //

