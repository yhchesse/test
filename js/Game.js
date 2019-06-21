(function (argument) {
	var Game  = window.Game = function (argument) {

		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		 //宽度最宽就是420    最好是750  进行穿阔的适配
		 this.w = document.documentElement.clientWidth;
		 this.h = document.documentElement.clientHeight; 
         this.canvas.width = this.w>420?420:this.w; 
         this.canvas.height = this.h>750?750:this.h;
          //初始化game的时候，我给game这个中介者添加一个一个场景的属性  0
          this.scene = 0;
           //加载资源的方法
          this.loadFile();
	}

	//游戏开启的方法
	Game.prototype.start = function (argument) {
	    this.frame  = 0;
	    var self = this;
	    //场景管理的实例必须要在异步语句当中进行实例，因为你要拿到game(中介者)
	    this.manager = new SceneManager();
	    //游戏开始的时候进图场景0
	    this.manager.enter(this.scene);
	   //开启游戏唯一的一个主循环
	   this.timer = setInterval(function (argument) {
	      self.frame++;
	      //清屏
	      self.clear();
	      //管理的renderAndUpdat这个方法一直在调用；
	      self.manager.renderAndUpdate();
	      self.ctx.fillStyle = "black";
	      self.ctx.fillText("frame:"+self.frame,0,10);
	   },20);
	}
	//添加一个清屏的方法
	Game.prototype.clear = function (argument) {
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
	}
	//加载文件的方法
	Game.prototype.loadFile = function (argument) {
	   //图片加载器
         this.R = {
         	  "bg_day":"images/bg_day.png",
         	  "land":"images/land.png",
         	  "pipe_up":"images/pipe_down.png",
         	  "pipe_down":"images/pipe_up.png",
         	  "bird0_0":"images/bird0_0.png",
         	  "title":"images/title.png",
         	  "button_play":"images/button_play.png",
         	  "tutorial":"images/tutorial.png"
         };
         var count = 0;
         var picAmount = Object.keys(this.R).length;

         //快速遍历
         for(k in this.R){
            //备份图片的地址
            var src = this.R[k];
            this.R[k] = new Image();
            this.R[k].src = src;
            //判断图片加载完毕
            //备份
            var self = this;
            this.R[k].onload = function function_name(argument) {
            	 count++;
            	 if(count==picAmount){
            	 	self.start();
            	 }
            }
         }
	}
})()