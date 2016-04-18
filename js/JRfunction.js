
	//IE6-8不支持 document.getElementByClassName(""); 解决兼容
var getClass=function(classname,obj){
	obj=obj||document;// obj是 undefined 则把document的值赋给它
	if(document.getElementsByClassName){//支持这个方法  返回ture
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var tags=obj.getElementsByTagName('*'); //选取文档的所有标签
		for(var i=0;i<tags.length;i++){

			if(check(tags[i].className,classname)){

				arr.push(tags[i]);
			}
		}
		return arr;
	}
}



function check(oldclass,newclass){  //解决多类名问题
	var arr=oldclass.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==newclass){

			return true;
			
		}
		return false;
	}
}

// innerText 在IE6-8中不支持
function getText(obj,val){
	if(val==undefined){

		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.innerText){
		return	obj.innerText=val;
		}else{
		return	 obj.textContent=val;
		}
	}
	

}


function getStyle(obj,attr){   //获取样式
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}

}

function $(selector,context){
	if(typeof selector=="string"){
		context=context||document;
		if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substr(1));
		}
		if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),context);
		}
		if(/^[a-zA-z][A-za-z1-6]*$/.test(selector)){
			return context.getElementsByTagName(selector);
		}
		if(/^<[a-zA-z][A-za-z1-6]{0,10}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1));
		}
	}else if(typeof selector=="function"){
		// on(window,"onload",selector)
		window.onload=function(){
			selector();
		}
	}
}

//获取父节点
function getParent(obj){
	return obj.parentNode;
}
//获取全部子节点
function getChild(obj,type){
	type="b"||"a";
	var childs=obj.childNodes;
	var newarr=[];
	if(type=="a"){
		for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==1){
			newarr.push(childs[i]);
			}
		}
	}else if(type=="b"){
		for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==1||(childs[i].nodeType==3&&trim(childs[i].nodeValue)!="")){
			newarr.push(childs[i]);
			}
		}
	}
	
	return newarr;
}


function trim(str,type){//不改变原字符串 返回的是一个值
	var type=type||"lr";
	if(type=="a"){
		return str.replace(/\s*/g,"");
	}
	if(type=="l"){
		return str.replace(/^\s*/g,"");
	}
	if(type=="r"){
		return str.replace(/\s*$/g,"");
	}
	if(type=="lr"){
		return str.replace(/^\s*|\s*$/g,"");
		
	}
}
//获取子节点第一个元素
function getFirst(parent,type){
	return getChild(parent,type)[0];
}
//获取子节点最后一个元素
function getLast(parent,type){
	var arr=getChild(parent,type);
	return arr[arr.length-1];
}
//获取子节点中的任意元素
function getNum(parent,num,type){
	var arr=getChild(parent);
	return arr[num];
	
}
//获取下一个兄弟元素
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
		next=next.nextSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}

//获取上一个兄弟节点
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=="")){
		up=up.previousSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}

//节点插入到某个对象之后
function insertAfter(obj,Afterobj){
	var next=getNext(Afterobj);
	if(next==false){
	return	Afterobj.parentNode.appendChild(obj);
	}else{
	return	obj.parentNode.insertBefore(obj,next);
	}
	
}

//对某一对象的同一事件添加多个处理程序
function on(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListener(event,fn);
	}else{
		obj.attachEvent("on"+event,fn,false);
	}
}

//删除某一对象同一事件中的某个程序
function off(obj,event,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(event,fn);
	}else{
		obj.detachEvent("on"+event,fn,false);
	}
}