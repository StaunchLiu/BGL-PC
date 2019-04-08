(function(){
    // 搜索
    $(".searchBox>.search>img").click(function(){ 
       var $img=$(this);
       $img.parent().next().removeClass().focus(); 
    })
    $(".searchBox>input").blur(function(){
        var $input=$(this);
        $input.addClass("hide");
    });
    // 登录悬停
    $(".topRight>ul>li>a:first-child").mouseenter(function(){
        var $a=$(this);
        $a.parent().children(".popUp").removeClass("hide");
    })
    $(".topRight>ul>li>.popUp").mouseleave(function(){
        var $div=$(this);
        $div.addClass("hide");
    })
    //登录验证
    $("#load").click(function(){
        var uname=$("[name=phone]")[0].value;
        var upwd=$("[name=upwd]")[0].value;
        var unameReg=/^1[3-9]\d{9}$/;
        var upwdReg=/^[o-z0-9]{8-16}$/i;
        if(!unameReg.test(uname)&&!upwdReg.test(upwd)){
            $(".errMsg").css("opacity","1")
        }
    })
    // 导航
    var headerMenus=document.querySelectorAll("[data-toggle=headerMenu]");
    for(var headerMenu of headerMenus){
        headerMenu.onmouseenter=function(){
            var headerSels=document.querySelectorAll(".menuSelectBg>ul");
            for(var headerSel of headerSels){
                headerSel.className="hide";
            }
            var headerTab=this.getAttribute("data-target");
            document.querySelectorAll(headerTab)[0].className="";
        }
    }
    $(".headerMenu").mouseleave(function(){
        $(this).children(".menuSelect").children(".menuSelectBg").children("ul").addClass("hide");
    })
    
})();