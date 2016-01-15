function random(max) {
	return Math.floor(Math.random() * (max + 1));
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



var elePerson = document.getElementById("person-box");
var btnChooseGame = document.getElementById("btnChooseGame");
btnChooseGame.addEventListener("click", function() {
	select.call(this);
}, false);



function select(which) {
	var which = this.getAttribute("data-obj-name"),
		prizeObj = window.result[which],
		prizeArr = prizeObj.data,
		timer = prizeObj.timer,
		max = employees.length - 1,
		ran = prizeObj.ran,
		resultStr = "";

	if (timer) {
		clearInterval(timer);
		timer = prizeObj.timer = null;

		prizeArr.push(employees[ran]);
		console.log(prizeArr);

		resultStr = renderLuckyArray(prizeArr);
		document.getElementsByClassName("selected-result")[0].innerHTML = resultStr;
		store.set("result", window.result);
		this.innerText = "开始";
		return false;
	} else {
		this.innerText = "暂停";
	}

	timer = prizeObj.timer = setInterval(function() {
		ran = prizeObj.ran = random(max);
		var tpl = render(employees[ran]);
		elePerson.innerHTML = tpl;
	}, 100);
}