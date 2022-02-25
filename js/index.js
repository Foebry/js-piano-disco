const body = document.querySelector("body");
const speed = 1000; //1s
const tiles = [];

class Tile {
	constructor(holder) {
		this.transition_speed = speed;
		this.holder = holder;
		this.element = this.generateHTML();
	}
	generateHTML() {
		this.holder.insertAdjacentHTML("beforeend", `<div class="tile"></div>`);
		return this.holder.querySelector(".tile:last-child");
	}
}

body.onclick = () => {
	const tile = new Tile(body);
	tiles.push(tile);
}