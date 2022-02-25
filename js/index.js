const body = document.querySelector("body");
const play = document.querySelector("#play");
const speed = 1000; //1s
const tiles = [];

class Tile {
	constructor(holder) {
		this.transition_speed = speed;
		this.holder = holder;
		this.element = this.generateHTML();
		this.setStyling();
		this.element.onclick = this.handleClickEvent.bind(this);
		this.inverted = false;
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
	handleClickEvent() {
		tiles.filter(tile => tile.inverted).forEach(tile => tile.invertColor())
		this.holder.style.backgroundColor = this.element.style.backgroundColor;
		this.invertColor();
	}
	invertColor() {
		const border_color = this.element.style.borderColor;
		const colors = border_color.substr(4, border_color.length - 5).split(",");
		this.inverted = !this.inverted;
		this.element.style.borderColor = `rgb(${[...colors].map(color=>Math.abs(color-255))})`;
	}
}

body.onclick = (e) => {
	if (e.target == body) tiles.push(new Tile(body));
	else if (e.target == play) {
		play.classList.toggle("active");
	}

}