class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    area = function () { return this.width * this.height }
}

let square = new Square(2);
Square.prototype.area = function () { return "HEJHEJ" }
console.log(square.area);