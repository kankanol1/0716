var oBox = document.querySelector("#info");
var oImg = document.querySelector("#b-img");
var oImgS = document.querySelectorAll("img");
var oBtn = document.querySelectorAll(".btn");
var oDiv = document.querySelector("#b-div");
var timer = setInterval(move,2000);
var oLeft = document.querySelector(".left");
var oRight = document.querySelector(".right");
var  obj = oBtn[0];
var oLr = document.querySelector("#b-lr");
obj.style.background = "pink";
oImg.style.left = "0px";
//oImg.style.left = "1200px";

//按钮点击事件
for(var i=0;i<oBtn.length;i++){
    oBtn[i].index = i;
    oBtn[i].onclick= function(){
        if(obj) obj.style.background = "";
        oImg.style.left = - this.index * 1471 +"px";
        oImg.style.transition = "1s";
        this.style.background = "pink";
        obj = this;

    };
}
//左右单击事件
oLeft.onclick = function(){
    for(var i=0;i<oBtn.length;i++){
        oBtn[i].style.background = "";
    }
    if(parseInt(oImg.style.left) > -8826){
        oImg.style.left = parseInt(oImg.style.left) - 1471 + "px";
        oImg.style.transition = "1s";
        //if(parseInt(oImg.style.left) < -1200){
        //   oBtn[4].style.background = "pink";
        //}else {
        oBtn[-parseInt(oImg.style.left)/1471 ].style.background = "pink";
        //}

    } else {
        oImg.style.left = "0px";
        oImg.style.transition = "0s";
        oBtn[0].style.background = "pink";
    }
};
oRight.onclick = function(){

    for(var i=0;i<oBtn.length;i++){
        oBtn[i].style.background = "";
    }
    if(parseInt(oImg.style.left)<0){
        oImg.style.left = parseInt(oImg.style.left) + 1471 + "px";
        oImg.style.transition = "1s";
        //if(parseInt(oImg.style.left) == 0){
        //   oBtn[0].style.background = "pink";
        // }else {
        oBtn[-parseInt(oImg.style.left)/1471 ].style.background = "pink";
        // }

    }else{
        oImg.style.left ="-1471px";
        oImg.style.transition = "0s";
        oBtn[4].style.background = "pink";
    }

};
//下面鼠标事件
oDiv.onmouseover = function(){
    clearInterval(timer);
};
oDiv.onmouseout = function(){
    timer=setInterval(move,2000);
};
//大盒子事件
oBox.onmouseover = function(){
    //obj.style.background = "pink";
    oLeft.style.opacity = "0.8";
    oRight.style.opacity = "0.8";
};
oBox.onmouseout = function(){
    for(var i=0;i<oBtn.length;i++){
        //oBtn[i].style.background = "";
    }
    oLeft.style.opacity = "0";
    oRight.style.opacity = "0";
};
//图片事件
oImg.onmouseover = function(){
    clearInterval(timer);
};
oImg.onmouseout = function(){
    timer=setInterval(move,2000);
};
//左右按钮
oLr.onmouseover = function(){
    clearInterval(timer);
};
oLr.onmouseout = function(){
    timer=setInterval(move,2000);
};

//move()函数
function move(){
    for(var i=0;i<oBtn.length;i++){
        oBtn[i].style.background = "";
    }
    obj.style.background = "pink";
    if(parseInt(oImg.style.left)>-8826){
        oImg.style.left = parseInt(oImg.style.left) -1471 + "px";

        if(-parseInt(oImg.style.left) / 1471 < 6){
            obj.style.background = "";
            oBtn[-parseInt(oImg.style.left) / 1471].style.background = "pink";
        } else {
            oBtn[0].style.background = "pink";
        }
        oImg.style.transition = "1s";
        if(parseInt(oImg.style.left)<= -8826){
            setTimeout(function(){
                oImg.style.left =  "0px";
                oImg.style.transition = "0s";
                //oBtn[-parseInt(oImg.style.left) / 300 - 1].style.background = "";
            },1500)

        }

    }else{
        oImg.style.left = "0px";
        oImg.style.transition = "0s";
        //oBtn[-parseInt(oImg.style.left) / 300 - 1].style.background = "";
    }
}