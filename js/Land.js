(function (argument) {
	   //大地类
	   var Land = window.Land = function (argument) {
	          //这个属性是大地的宽度、高度
	          this.w = 336;
	          this.h = 112;
	          //改变大地的x的数值
	          this.x = 0;
	   }
	   //渲染:大地的图片
	   Land.prototype.render = function (argument) {
	      game.ctx.drawImage(game.R["land"],this.x,game.canvas.height-this.h);
	      game.ctx.drawImage(game.R["land"],this.w+this.x,game.canvas.height-this.h);
	      game.ctx.drawImage(game.R["land"],2*this.w+this.x,game.canvas.height-this.h);
	   }
	   //更新的方法
	   Land.prototype.update = function (argument) {
	   	  this.x-=3;
	   	  if(this.x<-this.w){
	   	  	this.x = 0;
	   	  }
	   }
})()