class Monster {
    constructor(x,y,r)
      {
          var options = { 
              density: 2, 
              frictionAir: 0.7,
              isStatic: false
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("enemy.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
         var santaPos=this.body.position;		
         push();
         translate(santaPos.x, santaPos.y-100);
         rotate();
         rectMode(CENTER);
         fill(255,0,255)
         imageMode(CENTER);
         image(this.image, 0,0,this.r, this.r);
          pop();
              
      }
  }
  