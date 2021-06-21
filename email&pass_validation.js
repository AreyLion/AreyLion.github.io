//проверка корректности email и пароля
function validate(){
	// проверка email
	var email_correct = false
	var email = document.getElementById("email");
	var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
	document.getElementById("false_email").innerHTML = "";
    // проверка значения поля email
    if (!email_regexp.test(email.value)) {
    	document.getElementById("false_email").innerHTML = "Введите корректный email.";
    }
    else {
    	email_correct = true
    }

    // проверка пароля
    var password_points = 0;
    var password_correct = false;
    var password = document.getElementById("password");
    var password_regexp1 = /[0-9a-zа-яA-ZА-Я!@#$%^&*]{6,}/;
    var password_regexp2 = /[0-9]/;
    var password_regexp3 = /[a-zа-я]{1,}[A-ZА-Я]{1,}/;
    var password_regexp4 = /[!@#$%^&*]/;
    document.getElementById("false_password").innerHTML = "";

    // проверка на количество знаков
    if (!password_regexp1.test(password.value)) {
    	document.getElementById("false_password").innerHTML += "Введите не менее 6 символов<br />";
    }
    else {
    	password_points += 1;
    }
    // проверка на числа
    if (!password_regexp2.test(password.value)) {
    	document.getElementById("false_password").innerHTML += "Должны содержаться цифры<br />";
    }
    else {
    	password_points += 1;
    }
    // проверка на символы нижнего регистра
    if (!password_regexp3.test(password.value)) {
    	document.getElementById("false_password").innerHTML += "Должны содержаться символы разных регистров<br />";
    }
    else {
    	password_points += 1;
    }
    // проверка на спецсимволы
    if (!password_regexp4.test(password.value)) {
    	document.getElementById("false_password").innerHTML += "Должны содержаться спецсимволы: !@#$%^&*";
    }
    else {
    	password_points += 1;
    }
    // проверка на корректность всего пароля
    if (password_points == 4) {
    	password_correct = true;
    } 
 
    // проверка флагов корректности email и password
    if ((email_correct == true) && (password_correct == true)) {
    	document.getElementById("login_status").innerHTML = "Все круто!";
  	}
  	else {
  		document.getElementById("login_status").innerHTML = "Упс! Перезагрузите страницу и попробуйте снова";


  	}
}
