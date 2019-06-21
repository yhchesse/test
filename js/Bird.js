(function (argument) {
	 var Bird = window.Bird = function (argument) {
	 	   //属性小鸟的集合中心
	 	   this.x = game.canvas.width*(1-0.618);
	 	   this.y = 100;
	 	   //旋转的属性
	 	   this.rad = 0;
	 	   this.dy =0;
	 	   this.ddy = -0.2;
	 	   //状态的判断
	 	   this.fsm = "下降";
	 }
	 //渲染
	 Bird.prototype.render = function (argument) {
	      game.ctx.save();
	      game.ctx.translate(this.x,this.y);
	      game.ctx.rotate(this.rad);
	      game.ctx.drawImage(game.R["bird0_0"],-24,-24);
	      game.ctx.restore();
           game.ctx.fillStyle = "black";
	 }
	 //更新的方法
	 Bird.prototype.update = function (argument) {
	 	//这个是下降的条件
	    if(this.fsm=="下降"){
	    	this.dy+=0.2;
	 	    this.y+=this.dy;
	 	    this.rad =0.4;
            //如果小鸟掉地上了你的游戏也结束了
            if(this.y>game.canvas.height-112){
               //停止定时器
               clearInterval(game.timer);
            }
	    }else{
	    	//这个是上升的条件
	    	this.dy+=this.ddy;
	    	if(this.dy<0){
	    		 this.fsm = "下降" ;
	    	}
	    	//这个是小鸟向上飞的时候不能离开屏幕
	    	if(this.y<0){
	    		 this.y = 0;
	    	}
	 	    this.y-=this.dy;
	    }

	    //AABB盒子检测：这是粗滤的检测
	     this.x1 = this.x-12;
	     this.x2 = this.x+12;
	     this.y1 = this.y-12;
	     this.y2 = this.y+12;
	 }
	 //给小鸟添加一个向上飞的方法
	 Bird.prototype.fly = function (argument) {
	        this.fsm = "上升";
            //点击的时候让小鸟往上窜一下
            this.dy = 5.8;
            this.rad = -0.4;
	 }
})()