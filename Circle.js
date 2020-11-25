class Circle {
    constructor(x, y, radius,color,speed) {
        this.x = x;
        this.y = y;
        this.radius =radius;
        this.color = color;
        this.speed = speed;
    }

    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
    }

    move(){
        this.x += this.speed;
    }

}
