//检测指针位置
function getScrollTop(){   
    var scrollTop=0;   
    if(document.documentElement&&document.documentElement.scrollTop){   
        scrollTop=document.documentElement.scrollTop;   
    }else if(document.body){   
        scrollTop=document.body.scrollTop;   
    }   
    return scrollTop;   
}  
// 设置指针的高度 music.html
document.onscroll = function(){  
    var pos = getScrollTop();
    if (pos>100){
    	document.getElementById("content_right").style.position = 'fixed'
    	document.getElementById("content_right").style.top = '0'
    }
    else{
    	  document.getElementById("content_right").style.position = 'absolute'
    	  document.getElementById("content_right").style.top='11.1%' 
//		  document.getElementById("content_right").style.right='305px'


    }
} 

