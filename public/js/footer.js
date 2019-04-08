(function(){
    //icon hover效果
    $(".footerMain>ul:last-child>li:nth-child(2)>a").hover(
        function(){
            $(this).children().css("left","-30px");
        },
        function(){
            $(this).children().css("left","-110px");
        }
    )
    //城市联动列表
    var citys=[
        [
          {"name":'东城区',"value":"101"},
          {"name":'西城区',"value":"xc"},
          {"name":'海淀区',"value":"hd"},
          {"name":'朝阳区',"value":"cy"}
        ],
        [
          {"name":'河东区',"value":"hd"},
          {"name":'河西区',"value":"hx"},
          {"name":'南开区',"value":"nk"}
        ],
        [
          {"name":'石家庄市',"value":"ss"},
          {"name":'廊坊市',"value":"ls"},
          {"name":'保定市',"value":"bs"},
          {"name":'唐山市',"value":"ts"},
          {"name":'秦皇岛市',"value":"qs"}
        ]
    ];


    var newCountry=document.getElementById("newCountry")
    newCountry.onchange=function(){
      var selCountry=this;
      var selCountryIndex=selCountry.selectedIndex;
      var selCity=document.getElementById("newCity");
      if(selCountryIndex>0){
          selCountryIndex--;
          var cts=citys[selCountryIndex];
          selCity.length=0;
          var cityFrag=document.createDocumentFragment();
          cityFrag.appendChild(new Option("全部城市"));
          for(var city of cts){
              cityFrag.append(
                  new Option(city.name,city.value)
              );
          }
          selCity.append(cityFrag);
      }
      else{
          selCity.innerHTML=`<option value="全部城市">全部城市</option>`;
      }
    }
})();