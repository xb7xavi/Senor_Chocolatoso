const idbrownies = ['brownie1', 'brownie2', 'brownie3', 'brownie4', 'brownie5', 'brownie6', 'brownie7', 'brownie8', 'brownie9'];

const brownies = [];

idbrownies.forEach(function(id){
	brownies.push(document.getElementById(id));
})

function higher(event){
	event.target.style.height = '260px';
	event.target.style.width = '260px';
	event.target.style.boxShadow = '0 0 40px #45322e';
}

function lower(event){
	event.target.style.height = '250px';
	event.target.style.width = '250px';
	event.target.style.boxShadow = '';
}

brownies.forEach(function(brownie){
  brownie.onmouseover = higher;
  brownie.onmouseout = lower;
})




const idlinks = ['a', 'b', 'c'];
const links = [];

idlinks.forEach(function(ids){
	links.push(document.getElementById(ids));
})

function lhigher(event){
	event.target.style.color = '#965b4e';
}

function llower(event){
	event.target.style.color = '#45322e';
}

links.forEach(function(linkid){
  linkid.onmouseover = lhigher;
  linkid.onmouseout = llower;
})

