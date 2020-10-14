class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }
    static calculate(a, b) {
        debugger
        return a.width * a.height === b.width * b.height;
    }
}

let square1 = new Square(8);
let square2 = new Square(9);
console.log(Square.calculate(square1, square2))