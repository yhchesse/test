(function (argument) {
	var Background = window.Background = function (argument) {
		//背景图的宽度、高度
	    this.h = 512;
	    this.w = 288;
	    //控制的是背景图的移动的属性
	     this.x = 0;
	}
	//背景类的渲染的方法
	Background.prototype.render = function(argument) {
		//别忘记把上面的‘逢’补上
		game.ctx.fillStyle = "#4ec0ca";
		game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height-512);
		game.ctx.drawImage(game.R["bg_day"],this.x,game.canvas.height-512);
		game.ctx.drawImage(game.R["bg_day"],this.w+this.x,game.canvas.height-512);
		game.ctx.drawImage(game.R["bg_day"],2*this.w+this.x,game.canvas.height-512);
	}
	//更新的方法
	Background.prototype.update = function (argument) {
		 this.x -=2;
		 //某一个负数整数部分越大越小
		if(this.x<-this.w){
			this.x =0;
		}
	}
})()