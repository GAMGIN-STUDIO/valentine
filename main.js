const globalObject = {
	counter : 0
}

const yesBut = document.querySelector('.yes');
yesBut.addEventListener('click', () => {
	yesBut.classList.add('done');
	document.querySelector('.emoji').classList.add('done');
	document.querySelector('.wait').classList.add('done');
});

const noBut = document.querySelector('.no');
noBut.addEventListener('click', () => {
	if(globalObject.counter === 0){
		const response = confirm('Are you sure? You may cause emotional damage to someone!')
		if(response){
			alert('Okay, but first you have to catch me if you can :D :D');
			noBut.classList.remove('bottom-right', 'bottom-left', 'top');
			noBut.classList.add('bottom-left');
			globalObject.counter++;
		}else{
			alert('I knew it, you can do it, I\'m holding you!')
		}
	}else if (globalObject.counter === 1){
		noBut.classList.remove('bottom-right', 'bottom-left', 'top');
		noBut.classList.add('bottom-right');
		globalObject.counter++;
		alert('Ufff, it was a close call!!!');
	}else if (globalObject.counter === 2){
		noBut.classList.remove('bottom-right', 'bottom-left', 'top');
		noBut.classList.add('top');
		globalObject.counter = 0;
		alert('You missed!! HA HA HA :DDD');
	}
});