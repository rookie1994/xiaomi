window.onload=function(){
	// var imgs=getClass("lunbotu");
	// var btns=getClass("bnBtn")[0].getElementsByTagName("div");
	// console.log(btns);
	// console.log(imgs);//banner轮播
	
	//banner轮播效果
	// var num=0;
	// var t=setInterval(function(){
	// 	num++;
	// 	if(num>imgs.length-1){
	// 		num=0;
	// 	}
	// 	for(var i=0;i<imgs.length;i++){
	// 		imgs[i].style.display="none";
	// 		btns[i].className="";
	// 	}
	// 	imgs[num].style.display="block";
	// 	btns[num].className="bnBtns";
	// },2000);
	//mi
	var wheel=$(".banner")[0];
	var childs=$("img",wheel);
	var img1=$("img",wheel)[0];
	var imgW=parseInt(getStyle(img1,"width"));
	var btns=$("div",$(".bnBtn")[0]);
	img1.style.left=0;//第一张图片放在显示位置上
	var now=0;//定义当前显示的那张图片的下标 
	var next=0;//定义即将显示的那张图片的下标
	var flag=true;
	var tt=setInterval(Move,2000);
	function Move(){
		if(flag==false){
			return;
		}
		flag=false;
		next++;//即将显示的那张图片下标
		if(next>childs.length-1){
			next=0;//如果下面显示的图片下标大于最后一张图片的下标 继续从0开始
		}
		childs[next].style.left=imgW+"px";
		animate(childs[now],{left:-imgW},300);
		animate(childs[next],{left:0},300,function(){
			flag=true;
		});
		btns[now].className="";
		btns[next].className="bnBtns";
		now=next;
	}

	

	wheel.onmouseover=function(){
		clearInterval(tt);
	}
	wheel.onmouseout=function(){
		tt=setInterval(Move,2000);
	}
	for(var i=0;i<btns.length;i++){
		btns[i].index=i;
		btns[i].onclick=function(){
		if(flag==false||now==this.index){
			return;
		}
		flag=false;
		if(this.index>now){
			childs[this.index].style.left=imgW+"px";
			animate(childs[now],{left:-imgW},300);
		}else if(this.index<now){
			childs[this.index].style.left=-imgW+"px";
		 	animate(childs[now],{left:imgW},300);
		}
		
		animate(childs[this.index],{left:0},300,function(){
			flag=true;
		});
		btns[now].className="";
		btns[this.index].className="bnBtns";
		now=next=this.index;
		}
	}

	var rightB=$(".kj-r")[0];
	rightB.onclick=function(){
		Move();
	}
	var leftB=$(".kj-l")[0];
	leftB.onclick=function(){
		if(flag==false){
			return;
		}
		flag=false;
		next--;
		if(next<0){
			next=childs.length-1;
		}
		childs[next].style.left=-imgW+"px";
		animate(childs[now],{left:imgW},300);
		animate(childs[next],{left:0},300,function(){
			flag=true;
		});
		btns[now].className="";
		btns[next].className="bnBtns";
		now=next;
	}
	//mmi
	//点击切换图片
	// for(var i=0;i<btns.length;i++){
	// 	btns[i].index=i;
	// 	btns[i].onclick=function(){
	// 		for(var i=0;i<btns.length;i++){
	// 			imgs[i].style.display="none";
	// 			btns[i].className="";
	// 		}
	// 		imgs[this.index].style.display="block";
	// 		btns[this.index].className="bnBtns";
	// 		num=this.index;
	// 	}
	// }
	//鼠标移入停止轮播
	// var wheel=getClass("banner")[0];
	// wheel.onmouseover=function(){
	// 	clearInterval(t);
	// }










	//小米明星单品
	var dp=getClass("mxdpCtn");
	// console.log(dp);
	var num1=0;
	setInterval(function(){
		
		num1++;
		if(num1>1){
			num1=0;
		}
		for(var i=0;i<dp.length;i++){
			dp[i].style.display="none";
		}
		dp[num1].style.display="block";
		
	},2000)


	//onmouseover
	var dps=getClass("dpC-r");
	var dpbts=getClass("dpH")[0].getElementsByTagName("li");
	// console.log(dpbts);

	for(var i=0;i<dpbts.length;i++){
		dpbts[i].index=i;
		dpbts[i].onmouseover=function(){
			for(var j=0;j<dps.length;j++){
				dps[j].style.display="none";
				dpbts[j].className="";
			}
		dps[this.index].style.display="block";
		dpbts[this.index].className="jsUse";
	}
	}
	

	var iBox=getClass("mContent-R");
	// console.log(iBox);
	var iBtn=getClass("mContHead")[0].getElementsByTagName("li");
	// console.log(iBtn)
	for(var i=0;i<iBtn.length;i++){
		iBtn[i].index=i;
		iBtn[i].onmouseover=function(){
			for(var j=0;j<iBox.length;j++){
				iBox[j].style.display="none";
				iBtn[j].className="";
			}
		iBox[this.index].style.display="block";
		iBtn[this.index].className="jsUse";
	}
	}



	var zbBox=getClass("zbCont-rs");
	// console.log(zbBox)
	var zbBtn=getClass("zbH")[0].getElementsByTagName("li");
	// console.log(zbBtn)
	for(var i=0;i<zbBtn.length;i++){
		zbBtn[i].index=i;
		zbBtn[i].onmouseover=function(){
			for(var j=0;j<zbBox.length;j++){
				zbBox[j].style.display="none";
				zbBtn[j].className="";
			}
		zbBox[this.index].style.display="block";
		zbBtn[this.index].className="jsUse";
	}
	}


	// var tjBox=getClass("wntjContent");
	// console.log(tjBox)
	// var tjBtn=getClass("wntjHeadLogo")[0].getElementsByTagName("div");
	// console.log(tjBtn)


	//按需加载
	// console.log(heig)
	// console.log(doc.scrollTop);
	window.onscroll=function(){
	var rooms=$(".room");
	// console.log(rooms)
	var Toparr=[];
	var doc=document.body.scrollTop?document.body:document.documentElement;
	for(var i=0;i<rooms.length;i++){
		Toparr.push(rooms[i].offsetTop);
	}
	var heig=document.documentElement.clientHeight;
		for(var i=0;i<Toparr.length;i++){
			var imgs=$("img",rooms[i]);
			if(doc.scrollTop+heig>=Toparr[i]){
				for(var j=0;j<imgs.length;j++){
					imgs[j].src=imgs[j].getAttribute("asrc");
				}
			}
		}
	}
	window.onscroll();



//下方轮播部分
 var a1=$(".nrBox")[0];
 var childs1=$(".nrContentBox",a1);
 var imgW1=parseInt(getStyle(a1,"width"))+18;
 var btns1=$("span",$(".nr-btn")[0]);
 var rightB1=$(".nr-right")[0];
 var leftB1=$(".nr-left")[0];
 childs1[0].style.left=0;
 allMove(childs1,imgW1,btns1,a1,rightB1,leftB1)


 var a2=$(".nrBox")[1];
 var childs2=$(".nrContentBox",a2);
 var imgW2=parseInt(getStyle(a2,"width"))+18;
 var btns2=$("span",$(".nr-btn")[1]);
 var rightB2=$(".nr-right")[1];
 var leftB2=$(".nr-left")[1];
 childs2[0].style.left=0;
 allMove(childs2,imgW2,btns2,a2,rightB2,leftB2)


 var a3=$(".nrBox")[2];
 var childs3=$(".nrContentBox",a3);
 var imgW3=parseInt(getStyle(a3,"width"))+18;
 var btns3=$("span",$(".nr-btn")[2]);
 var rightB3=$(".nr-right")[2];
 var leftB3=$(".nr-left")[2];
 childs3[0].style.left=0;
 allMove(childs3,imgW3,btns3,a3,rightB3,leftB3)

 var a4=$(".nrBox")[3];
 var childs4=$(".nrContentBox",a4);
 var imgW4=parseInt(getStyle(a4,"width"))+18;
 var btns4=$("span",$(".nr-btn")[3]);
 var rightB4=$(".nr-right")[3];
 var leftB4=$(".nr-left")[3];
 childs4[0].style.left=0;
 allMove(childs4,imgW4,btns4,a4,rightB4,leftB4)
function allMove(childs,imgW,btns,a,rightB,leftB){

	var now=0;//定义当前显示的那张图片的下标 
	var next=0;//定义即将显示的那张图片的下标
	var flag=true;
	var tt=setInterval(Move,3000);
	function Move(){
		if(flag==false){
			return;
		}
		flag=false;
		next++;//即将显示的那张图片下标
		if(next>childs.length-1){
			next=0;//如果下面显示的图片下标大于最后一张图片的下标 继续从0开始
		}
		childs[next].style.left=imgW+"px";
		animate(childs[now],{left:-imgW},500);
		animate(childs[next],{left:0},500,function(){
			flag=true;
		});
		btns[now].className="";
		btns[next].className="hot";
		now=next;
	}
	// console.log(a);
	a.onmouseover=function(){
		clearInterval(tt);
	}
	a.onmouseout=function(){
		tt=setInterval(Move,3000);
	}
	for(var i=0;i<btns.length;i++){
		btns[i].index=i;
		btns[i].onclick=function(){
		if(flag==false||now==this.index){
			return;
		}
		flag=false;
		if(this.index>now){
			childs[this.index].style.left=imgW+"px";
			animate(childs[now],{left:-imgW},500);
		}else if(this.index<now){
			childs[this.index].style.left=-imgW+"px";
		 	animate(childs[now],{left:imgW},500);
		}
		
		animate(childs[this.index],{left:0},500,function(){
			flag=true;
		});
		btns[now].className="";
		btns[this.index].className="hot";
		now=next=this.index;
		}
	}
	rightB.onclick=function(){
		Move();
	}
	leftB.onclick=function(){
		if(flag==false){
			return;
		}
		flag=false;
		next--;
		if(next<0){
			next=childs.length-1;
		}
		childs[next].style.left=-imgW+"px";
		animate(childs[now],{left:imgW},500);
		animate(childs[next],{left:0},500,function(){
			flag=true;
		});
		btns[now].className="";
		btns[next].className="hot";
		now=next;
	}

  }

}