class Ball{
    constructor(x,y,width,height){
        var options={
            density:1,
            isStatic:false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);  
        this.width = width;
        this.height = height;

        World.add(world,this.body);
     }

     display(){
        var pos=this.body.position
        pos.x=mouseX
        pos.y=mouseY
        push()
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        rect(this.width,this.height);
        pop()

     }
}