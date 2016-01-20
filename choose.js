function random(max) {
	return Math.floor(Math.random() * (max + 1));
}

function checkAllDone() {
	var employees = window.employees;
	var rs = true;
	for (var i = 0; i < employees.length; i++) {
		if (!employees[i].done) {
			rs = false;
			break;
		}
	}
	return rs;
}

function getRandomIndex() {
	var ran;
	if (checkAllDone()) {
		return false;
	}
	do {
		ran = random(window.employees.length - 1);
	}
	while (!checkAllDone() && window.employees[ran].done)
	window.employees[ran].done = true;

	return ran;

}



function render(data) {
	var tpl = '<div><img src="asset/' + data.img + '" alt=""><h1 class="person-name">' + data.name + '</h1></div>';
	return tpl;
}


function renderLuckyArray(arr) {
	var tpl = "";
	for (var i = 0; i < arr.length; i++) {
		tpl += '<span class="item">' + arr[i].name + '</span>';
	}
	return tpl;
}

function renderPerson(data, toEle) {
	var tpl = render(data);
	toEle.innerHTML = tpl;
}

var eleRunBtn = document.getElementById("btnChooseGame");
var elePerson = document.getElementById("person-box");
var timer;
var ran;
var chooseList = [];

eleRunBtn.addEventListener("click", function() {
	if (timer) {
		clearInterval(timer);
		timer = null;
		eleRunBtn.innerText = "开始";

		var realIndex = getRandomIndex();

		if (realIndex === false) {
			console.log(realIndex);
			console.log("全部参与人员都抽取过了。");
			return false;
		}
		// console.log(realIndex);
		var realPerson = employees[realIndex];

		renderPerson(realPerson, elePerson);

		chooseList.push(realPerson);

		console.log(chooseList);



		var resultStr = renderLuckyArray(chooseList);
		document.getElementsByClassName("selected-result")[0].innerHTML = resultStr;

		return false;
	}

	eleRunBtn.innerText = "暂停";


	timer = setInterval(function() {
		ran = random(employees.length - 1);

		renderPerson(employees[ran], elePerson);
		// var tpl = render();
		// elePerson.innerHTML = tpl;
	}, 100);

}, false);