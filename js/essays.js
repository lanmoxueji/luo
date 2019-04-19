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
// 设置指针的高度essays.html
document.onscroll = function(){  
    var pos = getScrollTop();
    if (pos<480){
    	document.getElementById("aside").style.position = 'relative';
    	document.getElementById("aside").style.right = '0px';
    }
    else{
    	document.getElementById("aside").style.position = 'fixed';
    	document.getElementById("aside").style.top = '0';
    	document.getElementById("aside").style.right = '285px';
    }
} 