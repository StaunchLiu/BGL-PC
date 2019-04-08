(function(){
    //滚动事件
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        // 产品模块
        var productBlock=document.querySelectorAll(".product")[0];
        console.log(productBlock)
        //商品模块1F
        if(scrollTop>=300){
            //产品标题          
            productBlock.firstElementChild.firstElementChild.style.opacity=1;
            //产品模块
            productBlock.children[0].children[1].children[0].style.marginLeft=0;
            productBlock.children[0].children[1].children[1].style.marginRight=0;
        }
        //商品模块2F
        if(scrollTop>=1000){
            productBlock.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.style.opacity=1;
            productBlock.children[2].children[1].children[0].style.marginLeft=0;
            productBlock.children[2].children[1].children[1].style.marginRight=0;
        }
        //商品模块3F
        if(scrollTop>=1700){
            productBlock.lastElementChild.firstElementChild.style.opacity=1;
            productBlock.children[4].children[1].children[0].style.marginLeft=0;
            productBlock.children[4].children[1].children[1].style.marginRight=0;
        }
        //浮动锚点
        var toTop=document.getElementById("toTop");
        var words=document.getElementById("words");
        if(scrollTop>=500){
            toTop.style.opacity=1;
            words.style.opacity=1;
        }
        else{
            toTop.style.opacity=0;
            words.style.opacity=0;
        }
        console.log(scrollTop);
    }
    $("#toTop").click(function(){
        $('html').animate({scrollTop:0},400);
        return false;
    })
})()