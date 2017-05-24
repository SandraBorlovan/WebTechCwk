function Pacman(){
  this.dir = createVector(0,0);
  this.pos = createVector(60,60);

  this.setDir= function(x, y){
    this.dir.x = x;
    this.dir.y = y;
  }

  this.update = function(){
    if(this.dir.x == 1){
      this.right();
    }else if(this.dir.x == -1){
      this.left();
    }else if(this.dir.y == 1){
      this.down();
    }else if(this.dir.y == -1){
      this.up();
    }

  }

  this.left = function(){
    if(!maze.contains(this.pos.x - scl, this.pos.y)){
      this.pos.x -= scl;
    }else{
      this.setDir(0,0);
    }
  }

  this.right = function(){
    if(!maze.contains(this.pos.x + scl, this.pos.y)){
      this.pos.x += scl;
    }else{
      this.setDir(0,0);
    }
  }

  this.up = function(){
    if(!maze.contains(this.pos.x, this.pos.y - scl)){
      this.pos.y -= scl;
    }else{
      this.setDir(0,0);
    }
  }

  this.down = function(){
    if(!maze.contains(this.pos.x, this.pos.y + scl)){
      this.pos.y += scl;
    }else{
      this.setDir(0,0);
    }
  }

  this.show = function(){
    push();
    strokeWeight(30);
    stroke('yellow');
    point(this.pos.x, this.pos.y);
    pop();

  }
}
