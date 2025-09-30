export default class Ship {
    constructor(length) {
        this.length = length; // ow many hits needed to sink
        this.hits = 0; //start wit no hits
    }

    hit() {
        this.hits += 1; // add one hit
    }

    isSunk() {
        return this.hits >= this.length; //true if hits are enough
    }
}
