window.onload = function() {
    new WOW().init();
};

var menu = document.querySelector('.headerContent__menu');
var input = document.querySelectorAll('.userForm__input');
var submit = document.querySelector('.userForm__submitBtn');
var inputValues = [];
var menuIsOpen = false;

menu.onclick = toggleMenu;

function toggleMenu() {
	if ( !menuIsOpen ) {
		open();
	} else {
		close();
	}		
	menuIsOpen = !menuIsOpen;
}



submit.onclick = function (e) {
    e.preventDefault();

    var myArr = [];

    clearError(input);

    for( var i = 0; i < input.length; i++){
        var currVal = input[i].value;
        if(!currVal) {
            errorMessage(input[i]);
        } else {
            myArr.push(currVal);
        }
    }
    if ( input.length == myArr.length) {
        inputValues.push(myArr);

        clearForm();
		successBlock();

    }   else {
        console.log('form is invalid')
    }
    console.log(inputValues);
}






function close() {
	var x = menu.querySelector('.nav');
	x.style.transform = "scaleY(0)";
};
function open() {
	var x = menu.querySelector('.nav');
	x.style.transform = "scaleY(1)";
};
function errorMessage(currInput) {
    currInput.classList.add('userForm__input-error');
};
function clearError(input) {
    for (var i = 0; i < input.length; i++) {
        input[i].classList.remove('userForm__input-error');
    }
};
function clearForm() {
    for (var i = 0; i < input.length; i++){
        input[i].value = '';
    }
};
function successBlock() {
	var contactUsBlock = document.querySelector('.contactUsBlock');
	var success = document.querySelector('.success');
	var successClose = document.querySelector('.successClose');

	if(!success){
		success = document.createElement('div');
		success.classList.add('success');
		success.innerHTML = "Ваша заявка успешно отправлена";
		
		successClose = document.createElement('div');
		successClose.classList.add('successClose');
		successClose.innerHTML = "X";

		success.appendChild(successClose);
		contactUsBlock.appendChild(success);
	}
	successClose.onclick = function(){
		success.remove();
	}
};