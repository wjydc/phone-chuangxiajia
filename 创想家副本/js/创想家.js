//获取元素
var box=document.getElementsByClassName("box");
//获取行间样式
var arrw=null;    var arrh=null;   var arrl=null;   var arrt=null;
function getStyle(box){
	arrw=[]; 
	arrh=[];
	arrl=[]; 
	arrt=[];
	var w=null;
	var h=null;
	var l=null;
	var t=null;
	for (var i = 0; i < box.length; i++) {
		if (window.getComputedStyle) {
			w=window.getComputedStyle(box[i],null).width;
			h=window.getComputedStyle(box[i],null).height;
			l=window.getComputedStyle(box[i],null).left;
			t=window.getComputedStyle(box[i],null).top;
    	}
     	else {
			w=box[i](currentStyle.width);
       		h=box[i](currentStyle.height);
       		l=box[i](currentStyle.left);
       		t=box[i](currentStyle.top);
       	}
       	arrw.push(w);
       	arrh.push(h);
       	arrl.push(l);
       	arrt.push(t);
	}

}
 getStyle(box);      //此处数组中保存每个对象元素的width  height  top  left


// list的宽高left  top
var screenwidth=null;
var screenheight=null;

var list=document.getElementsByClassName("list");

function creatstyle(list){
	screenwidth=window.innerWidth;      //获取手机屏幕的宽度
	screenheight=window.innerHeight;        //获取手机屏幕的高度
	var scalex=parseFloat(screenwidth/750);
	var scaley=parseFloat(screenheight/1334);
	for (var i = 0; i < list.length; i++) {
		list[i].style.width=parseInt(arrw[i])*scalex+"px";
		list[i].style.left=parseInt(arrl[i])*scalex+"px";
		list[i].style.height=parseInt(arrh[i])*scaley+"px";
		list[i].style.top=parseInt(arrt[i])*scaley+"px";
	}
}
creatstyle(list);






	


















