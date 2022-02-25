const body = document.querySelector("body");
const speed = 1000; //1s
const tiles = [];

class Tile {
	constructor(holder) {
		this.transition_speed = speed;
		this.holder = holder;
		this.element = this.generateHTML();
		this.setStyling();
	}
	generateHTML() {
		this.holder.insertAdjacentHTML("beforeend", `<div class="tile"></div>`);
		return this.holder.querySelector(".tile:last-child");
	}
	setStyling() {
		this.bgc = `rgb(${[...Array(3).fill(0).map(el=>Math.round(Math.random() * 255))]})`;
		this.element.style.backgroundColor = this.bgc;
		this.element.style.border = `2px solid ${this.bgc}`;
	}
}

body.onclick = () => {
	const tile = new Tile(body);
	tiles.push(tile);
}