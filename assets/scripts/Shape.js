class Shape {
    constructor (name, color) {
        this.name = name;
        this.color = color;

    }
    

    getInfo() {
 return `${this.color} ${this.name}`;
    }
}

export default Shape;