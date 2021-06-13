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
      push();
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);

      if(this.body.speed > 3){
        translate(pos.x, pos.y);
        this.visibility = this.visibility - 10;
        tint( 225 ,this.visibility);
      }
      pop();
     }
    }