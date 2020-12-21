class Tree{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.Width = 450;
        this.Height = 600;

        this.image = loadImage("Plucking mangoes/tree.png")
        World.add(world, this.body)
    }
    display() {
        Push();
        translate(pos.x, pos.y + 10)
        Fill(255)
        image(this.image, 0, this.Width, this.Height)
        Pop();
    }
}