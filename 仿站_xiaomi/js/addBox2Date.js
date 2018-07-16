var oUl1 = document.getElementById("box2-ul1");
var oUl2 = document.getElementById("box2-ul2");
for(var i=0;i<4;i++){
    createBox2Data(i);
    createBox2Data2(i);

}

function createBox2Data(num){
    var newLi = document.createElement("li");
    if(num<3){
        newLi.className = "box2-li";
    }else{
        newLi.className = "box2-li last";
    }
    newLi.innerHTML = '<a href="javascript:;">\n' +
        '                            <img src="'+box2Data1[num].url+'" alt="">\n' +
        '                            <p>'+box2Data1[num].span+'</p>\n' +
        '                        </a>\n' +
        '                        <p class="desc">' + box2Data1[num].desc+'</p>\n' +
        '                        <p class="price">\n' +
        '                            <span>'+box2Data1[num].price+'</span>\n' +
        '                            元\n' +
        '                        </p>';
    oUl1.appendChild(newLi);
}
function createBox2Data2(num) {
    var newLi = document.createElement("li");
    if(num<3){
        newLi.className = "box2-li";
    }else{
        newLi.className = "box2-li last";
    }
    newLi.innerHTML = '<a href="javascript:;">\n' +
        '                            <img src="'+box2Data2[num].url+'" alt="">\n' +
        '                            <p>'+box2Data2[num].span+'</p>\n' +
        '                        </a>\n' +
        '                        <p class="desc">' + box2Data2[num].desc+'</p>\n' +
        '                        <p class="price">\n' +
        '                            <span>'+box2Data2[num].price+'</span>\n' +
        '                            元\n' +
        '                        </p>';
    oUl2.appendChild(newLi);
}
