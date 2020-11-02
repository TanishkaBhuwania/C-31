class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //visibility is between 0 and 255 
    //0 = 1FULLY OFF byte = all 0000 0000 zeros = invisible
    //255 = 1FULLY ON byte = all 1111 1111 ones(8 bites) = fully visibli 
    this.Visibility = 255;
  }
   display(){
     console.log(this.body.speed);
     //display the pig if the speed is less then 3 else make him vanish gradually 
     if(this.body.speed<3){
      super.display();
     }
     else{
       //remove the body from the world
      World.remove(world,this.body);
      //do not aply changes to the entire game 
      push();
      //reduce the visibility by 5
      this.Visibility = this.Visibility-5
      //tint creates vanishing effects by adding a transparent layer to the image
      tint(255,this.Visibility);
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop();

     }
   }
};