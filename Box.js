class Box {
   constructor(x,y,width,height){
     var options={
      density:1
     }

     this.body=Bodies.rectangle(x,y,width,height)
     this.width= width;
     this.height= height;
   }
   display(){
      push()
      var pos = this.body.position
      rect(pos.x,pos.y,this.width,this.height)
      fill("Blue")
      pop()
   }


};
