class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution' :0.8,
          'friction' :0.9,
          'density' :1
      }
      this.image = loadImage("block.png");
      this.visibility = 225
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      var pos= this.body.position;
        if(this.body.speed <3){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
      else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
     }
    }
