window.rsDef = {
	choose: {
		timer: null,
		data: [],
		ran: undefined
	},
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

window.result = store.get("result") || rsDef;

window.def = {
	id: 0,
	name: "XXX",
	img: "random.jpg"
};

window.employees = [
	def, {
		name: "Harris 衡荣",
		img: "1.png"
	}, {
		name: "Leon 蔡礼杰",
		img: "2.jpg"
	}, {
		name: "Alex 成龙",
		img: "1.png"
	}, {
		name: "衡荣4",
		img: "2.jpg"
	}, {
		name: "衡荣5",
		img: "1.png"
	}, {
		name: "衡荣6",
		img: "2.jpg"
	}, {
		name: "衡荣7",
		img: "1.png"
	}, {
		name: "衡荣8",
		img: "2.jpg"
	}, {
		name: "衡荣9",
		img: "1.png"
	}
];