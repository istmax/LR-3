function Check()

{

d=document

var admin, name;

name = "Максим";

admin = name;

alert( admin );
}

function Age()

{

d=document

let age = +prompt('Введите ваш возраст');

var result = confirm('Вы уверены, что вам '+age);

if (result == true)

{

alert ('Хорошо')

}

else

{

age = +prompt('Введите ваш возраст');

alert ('ОК')

}

}









var secondname = " ";

document.getElementById('btn').addEventListener("click", Rename);

function Rename(){
    secondname = document.getElementById('_secondname').value;

document.getElementById('secondname').innerText = "Фамилия: " + secondname;

}


var trigger=0, name, age, sex, education, mathematic, asu, cutting, programming, adress, motiv; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
		name = prompt("Введите имя");
		while(!isNaN(name))
		{
			name = prompt("Введите имя");
		}
		age = prompt("Введите возраст");
		while(isNaN(age))
		{
			age = prompt("Введите возраст");
		}
		
		sex = prompt("Введите пол");
		while(!(sex.charAt(0) == 'М' || sex.charAt(0) == 'Ж'))
		{
			sex = prompt("Введите пол");
		}
			ingl = prompt("Какой у вас уровень Английского?");
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			strem = confirm("Есть ли у вас стремления?");
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#ingl").val(ingl)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#ingl").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			document.getElementById("strem").checked = strem;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("mathematic").checked ==true && document.getElementById("programming").checked ==true)
		{
       		var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
		x.innerHTML = text;
			}
			document.getElementById("education").disabled = true;
			document.getElementById("mathematic").disabled = true;
			document.getElementById("asu").disabled = true;
			document.getElementById("cutting").disabled = true;
			document.getElementById("programming").disabled = true;
			document.getElementById("strem").disabled = true;
			$("#startTest").hide();
		}
		}