var eleRunBtn = document.getElementById("btnChooseGame");
var elePerson = document.getElementById("person-box");
var timer;
var ran;
var chooseList = [];



// 事件绑定，选人逻辑
eleRunBtn.addEventListener("click", function() {
	var realIndex,
		realPerson,
		resultStr;

	// 如果已经开始，则暂停
	if (timer) {
		clearInterval(timer);
		timer = null;
		eleRunBtn.innerText = "开始";
		realIndex = getRandomIndex();
		if (realIndex === false) {
			console.log("全部参与人员都抽取过了。");
			return false;
		}
		realPerson = employees[realIndex];
		renderPerson(realPerson, elePerson);
		chooseList.push(realPerson);
		resultStr = renderLuckyArray(chooseList);
		document.getElementsByClassName("selected-result")[0].innerHTML = resultStr;
		return false;
	}

	// 暂停状态下，即开始
	eleRunBtn.innerText = "暂停";
	timer = setInterval(function() {
		ran = random(employees.length - 1);
		renderPerson(employees[ran], elePerson);
	}, 100);

}, false);