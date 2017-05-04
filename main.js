 // *1
 // var value = prompt('Каково "официальное" название JavaScript?', '');

 //    if (value == 'ECMAScript') {
 //      alert('Верно!');
 //    } else {
 //      alert('Не знаете? "ECMAScript"!');
 //    }

// *2
 // var value = prompt('Значение?', '');
 // 	if (value > 0) {
 // 		alert('1');
 // 	}else if (value < 0) {
 // 		alert('-1');
 // 	}else{
 // 		alert('0');
 // 	}

// *3 Д/з №1

var isYouAdmin = prompt('Кто пришел?','');
	if (isYouAdmin == 'Админ') {
		var passwordAdmin = prompt('Пароль?','');
			if (passwordAdmin == 'Чёрный Властелин') {
				alert('Добро пожаловать!');
			}else if (passwordAdmin == null) {
				alert('Вход отменён');
			}else{
				alert('Пароль неверен!');
			}
	}else if (isYouAdmin == null) {
		alert('Вход отменён');
	}else{
		alert('Я вас не знаю');
	}


// *3 Д/з №2
  var y=10;	
  for (x = 2; x < y; x++) {
          for (y=2; y < x; y++){
          	if (y % x === 0);
          alert( x );
  }
  }

