window.rsDef = {
	specialPrize: {
		timer: null,
		data: [],
		ran: undefined
	},
	firstPrize: {
		timer: null,
		data: [],
		ran: undefined
	},
	secondPrize: {
		timer: null,
		data: [],
		ran: undefined
	},
	thirdPrize: {
		timer: null,
		data: [],
		ran: undefined
	}
};

window.result = rsDef;

var specialPrizeBtn = document.getElementById("specialPrizeBtn"),
	firstPrizeBtn = document.getElementById("firstPrizeBtn"),
	secondPrizeBtn = document.getElementById("secondPrizeBtn"),
	thirdPrizeBtn = document.getElementById("thirdPrizeBtn");

var btns = document.querySelectorAll(".btn");
var elePerson = document.getElementById("person-box");
var timer;

document.addEventListener("click", function(event) {
	var target = event.target;
	var whichPrize;
	if (!target.classList.contains("btn")) {
		return false;
	}

	whichPrize = target.dataset && target.dataset.which;
	if (!whichPrize) {
		throw new Error("没有正确的奖项。");
		return false;
	}

	var targetWrap = document.getElementById(whichPrize);
	var targetRsWrap = targetWrap.querySelector(".selected-result");
	console.log(targetRsWrap);

	console.log(whichPrize);

	run(target, whichPrize, targetRsWrap);
}, false);

function run(btn, whichPrize, toElement) {
	var prizeObj = window.rsDef[whichPrize],
		prizeArr = prizeObj.data,
		realIndex;

	if (prizeObj.timer) {
		clearInterval(prizeObj.timer);
		prizeObj.timer = null;

		btn.innerText = "开始";

		realIndex = getRandomIndex();
		if (realIndex === false) {
			console.log("全部参与人员都抽取过了。");
			return false;
		}
		realPerson = employees[realIndex];
		renderPerson(realPerson, elePerson);
		(prizeObj.rs || (prizeObj.rs = [])).push(realPerson);
		resultStr = renderLuckyArray(prizeObj.rs);
		toElement.innerHTML = resultStr;



		return false;
	}

	btn.innerText = "暂停";

	prizeObj.timer = setInterval(function() {
		prizeObj.ran = random(employees.length - 1);
		renderPerson(employees[prizeObj.ran], elePerson);
	}, 100);


}