(function (argument) {
	var SceneManager =window.SceneManager = function (argument) {
	     //监听事件
	     this.bindEvent();
	}
	//进入哪一个场景
	SceneManager.prototype.enter = function (number) {
		   //设置场景为几
		   game.scene = number;
		   //分三种场景
		   switch(game.scene){
		   	     case 0:
		   	        //管理的属性
		   	        //第一个场景的文字的属性
		   	        this.titleY = 0;
		   	        //第一个场景的鸟的属性
		   	        this.birdY = 0;

		   	        this.isMove = true;
		   	      break;
		   	     case 1:
		   	         this.idx = 0;
		   	         this.isShan = true;
		   	      break;
		   	     case 2:
		   	       //进入这个场景全部的‘演员’都需要new出来
		   	       game.background = new Background();
		   	       game.land = new Land();
		   	       game.bird = new Bird();
                    game.pipeArr= [];
		   	       break; 
		   }
	} 
	//
	SceneManager.prototype.renderAndUpdate = function (argument) {

	     switch(game.scene){
		   	     case 0:
		   	        //场景0的背景图
		   	        game.ctx.fillStyle = "#4ec0ca";
		            game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height-512);
		   	        game.ctx.drawImage(game.R["bg_day"],0,game.canvas.height-512);
		   	        game.ctx.drawImage(game.R["bg_day"],288,game.canvas.height-512);
		   	        //这个是title的设置
		   	        this.titleY+=2;

		   	        if(this.titleY>150) this.titleY=150;
		   	         //titie的设置
		   	        game.ctx.drawImage(game.R["title"],100,this.titleY);
		   	        //鸟
		   	        //小鸟的置反的套路
		   	        if(this.isMove){
		   	        	this.birdY+=4;
		   	        	if(this.birdY>150) this.isMove = !this.isMove;
		   	        }else{
		   	        	 this.birdY-=4;
		   	        	  if(this.birdY<0) this.isMove = !this.isMove;
		   	        }
		   	         game.ctx.drawImage(game.R["bird0_0"],150,200+this.birdY);
                     //按钮
                     game.ctx.drawImage(game.R["button_play"],120,400);
		   	      break;
		   	     case 1:
		   	        //场景1的背景图
		   	        game.ctx.fillStyle = "#4ec0ca";
		            game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height-512);
		   	        game.ctx.drawImage(game.R["bg_day"],0,game.canvas.height-512);
		   	        game.ctx.drawImage(game.R["bg_day"],288,game.canvas.height-512);
		   	        game.ctx.drawImage(game.R["bird0_0"],150,200);
		   	        //教程的图片
		   	         if(this.isShan){
		   	         	  this.idx+=0.05;
		   	         	 if(this.idx>=1) this.isShan = !this.isShan;
		   	         }else{
                         this.idx-=0.05;
                         if(this.idx<=0) this.isShan = !this.isShan;
		   	         }
		   	         game.ctx.save();
		   	         game.ctx.globalAlpha = this.idx;
		   	         game.ctx.drawImage(game.R["tutorial"],120,280);
		   	         game.ctx.restore();
		   	      break;
		   	     case 2:
		   	       game.background.render();
		   	       game.background.update();
		   	       game.land.render();
		   	       game.land.update();
		   	       game.bird.render();
		   	       game.bird.update();
		   	       game.frame%100==0&&new Pipe();
		   	       for(var i = 0;i<game.pipeArr.length;i++){
		   	       	   game.pipeArr[i].render();
		   	       	   game.pipeArr[i].update();
		   	       }
		   	       break; 
		   }

	}
	SceneManager.prototype.bindEvent = function (argument) {
	   //点击事件
	   var self = this ;
	   game.canvas.onclick = function (event) {
	   	    switch(game.scene){
		   	     case 0:
		   	     var x = event.clientX;
		   	     var y = event.clientY;
		   	     //点击按钮的范围
		   	     if(x>128&&x<228&&y>406&&y<459){
		   	     	//进入场景1
		   	       self.enter(1);
		   	     }
		   	      break;
		   	     case 1:
		   	      self.enter(2);
		   	      break;
		   	     case 2:
		   	       game.bird.fly();
		   	      break; 
		   }
	   }
	}

})()