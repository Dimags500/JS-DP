
let GraphicObject = require('./GraphicObject');

class Circle extends GraphicObject{
    constructor(color){
        super('Circle');
        this.color = color
    }
}

class Square extends GraphicObject{
    constructor(color){
        super('Square');
        this.color = color
    }
}

let drawing = new GraphicObject();
drawing.children.push(new Square('Red'));
drawing.children.push(new Circle('Yellow'));

let group = new GraphicObject();
group.children.push(new Square('Green'));
group.children.push(new Circle('White'));

drawing.children.push(group);

console.log(drawing.toString());

