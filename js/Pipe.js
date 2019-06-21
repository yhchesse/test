(function (argument) {
	  var Pipe = window.Pipe = function (argument) {
	  	     //管子的宽度、高度
	  	     this.w = 52;
	  	     this.h = 320;
	  	     //这个是上面管子的高度最小是50最大320
	  	     this.h1 = parseInt(Math.random()*270)+50;
	  	     this.space = 140;
	  	     this.h2 = game.canvas.height-112-this.h1-this.space;
	  	     //改变的是管子的水平距离
	  	     this.x = game.canvas.width;
            //添加到数组当中
            game.pipeArr.push(this);
	  }
	  //管子的渲染的方法
	  Pipe.prototype.render = function (argument) {
	    game.ctx.drawImage(game.R["pipe_up"],0,this.h-this.h1,this.w,this.h1,this.x,0,this.w,this.h1);
	    game.ctx.drawImage(game.R["pipe_down"],0,0,this.w,this.h2,this.x,this.h1+this.space,this.w,this.h2);
        game.ctx.fillStyle = "black";
	  }
	  //管子的更新的方法
	  Pipe.prototype.update = function (argument) {
	  	   this.x-=3;

	  	   //AABB检测
	  	   this.x1 = this.x;
	  	   this.x2 = this.x+this.w;
	  	   this.y1 = this.h1;
	  	   this.y2 = this.h1+this.space;

	  	   //进行死亡鉴定
	  	    //①小鸟的x2>柱子的x1&&小鸟的y1<柱子的y1&&小鸟的x1<柱子的x2
            //②小鸟的x2>柱子的x1&&小鸟的y2>柱子的y2&&小鸟的x1<柱子的x2
	  	   if(game.bird.x2>this.x1&&game.bird.y1<this.y1&&game.bird.x1<this.x2||
              game.bird.x2>this.x1&&game.bird.y2>this.y2&&game.bird.x1<this.x2
	  	   	){
	  	   	     clearInterval(game.timer);
	  	   	     // game.manager.enter(3);
	  	   }
	  }
})()