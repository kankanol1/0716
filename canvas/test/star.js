
/*星空js文件*/
var cColor = ["#F2EFE6", "#f17c67", "#FDF02D", "#376956", "#C3BED4",
    "#495A80", "#C7FFEC", "#E9F01D", "#9966CC", "#00FF80", "#EE88AB",
    "#BDB76A", "#008573", "#FE4C40","#DE3163"];
var numbers = 100;
var len = cColor.length;
function Starry(){
    this.cxt = canvas.getContext('2d');
    this.num = numbers;
    this.data = [];
    this.snake = '';

}
Starry.prototype = {
    init:function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.cW = canvas.width;
        this.cH = canvas.height;
        this.snake ={
            x: Math.random() * this.cW,
            y: Math.random() * this.cH,
            r: 5,
            sX: Math.random() * 0.6 - 0.3,
            sY: Math.random() * 0.6 - 0.3
        };
        this.drawSnake(this.snake.x,this.snake.y,this.snake.r,);
        for (var i=0; i<this.num; i++) {
            this.data[i] = {
                x: Math.random() * this.cW,
                y: Math.random() * this.cH,
                r: Math.random() * 5,
                sX: Math.random() * 0.6 - 0.3,
                sY: Math.random() * 0.6 - 0.3
            };
            this.drawCircle(this.data[i].x,this.data[i].y,this.data[i].r,i%len);
        }
    },
    drawCircle: function(x,y,r,c) {
        var cxt = this.cxt;
        cxt.save();
        cxt.fillStyle = cColor[c];
        cxt.beginPath();
        cxt.arc(x,y,r,0,Math.PI*2,false);
        cxt.fill();
        cxt.restore();
    },
    drawSnake: function(x,y,r) {
        var cxt = this.cxt;
        cxt.save();
        cxt.fillStyle = "pink";
        cxt.beginPath();
        cxt.arc(x,y,r,0,Math.PI*2,false);
        cxt.fill();
        cxt.restore();
    },
    moveCircle: function() {
        var self = this;
        //self.cxt.clearRect(0,0,self.cW,self.cH);
        self.cxt.clearRect(0,0,self.cW,self.cH);//清除屏幕
        for (var i=0; i<self.num; i++) {
            self.data[i].x += self.data[i].sX;
            self.data[i].y += self.data[i].sY;
            if (self.data[i].x>self.cW || self.data[i].x<0){
                self.data[i].sX = -self.data[i].sX;
            }
            if (self.data[i].y>self.cH || self.data[i].y<0){
                self.data[i].sY = -self.data[i].sY;
            }
            self.drawCircle(self.data[i].x,self.data[i].y,self.data[i].r,i%len)
        }
    },

    moveSnake: function() {
        var self = this;
        var ad = Math.atan(self.snake.sX/self.snake.sY);
        var aw = 2*self.snake.r*Math.sin(ad),
            ah = 2*self.snake.r*Math.cos(ad);
        var sw = self.snake.x - aw/2,
            sh = self.snake.y - ah/2;
        var bw = sw - aw,
            bh = sh - ah;
        self.cxt.clearRect(bw,bh,bw+(sw-bw)/1000,bh+(sh-bh)/100);
        self.snake.x += self.snake.sX;
        self.snake.y += self.snake.sY;
        if (self.snake.x>self.cW || self.snake.x<0){
            self.snake.sX = -self.snake.sX;
        }
        if (self.snake.y>self.cH || self.snake.y<0){
            self.snake.sY = -self.snake.sY;
        }
        self.drawSnake(self.snake.x,self.snake.y,self.snake.r)
    }
}
var starry = new Starry();
starry.init();
starry.drawCircle();
//setInterval(function(){starry.drawCircle();},10);
setInterval(function(){starry.moveSnake();},10);