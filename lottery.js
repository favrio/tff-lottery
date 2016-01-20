var specialPrizeBtn = document.getElementById("specialPrizeBtn"),
	firstPrizeBtn = document.getElementById("firstPrizeBtn"),
	secondPrizeBtn = document.getElementById("secondPrizeBtn"),
	thirdPrizeBtn = document.getElementById("thirdPrizeBtn");

var btns = document.querySelectorAll(".btn");

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



}, false);

console.log(btns);