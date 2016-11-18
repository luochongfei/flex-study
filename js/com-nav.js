;(function(){
    var urlCSS="css/com-nav.css";
    var HTML=''+
        '<div id="com-nav">'+
        '    <a href="javascript:history.go(-1)" class="abtn-go-back"></a>'+
        '    <span>flex</span>'+
        '    <span class="nav-wrap">'+
        '        <ul>'+
        '            <li><a href="justify-content.html">justify-content | 水平分布方式</a></li>'+
        '            <li><a href="align-items.html">align-items | 垂直分布方式</a></li>'+
        '            <li><a href="flex-direction.html">flex-direction | 元素排列</a></li>'+
        '            <li><a href="flex-wrap.html">flex-wrap | 元素换行</a></li>'+
        '            <li><a href="order.html">order | 元素排序</a></li>'+
        '            <li><a href="flex-grow.html">flex-grow | 剩余空间比例分配</a></li>'+
        '            <li><a href="flex-shrink.html">flex-shrink | 超出宽度压缩比例分配</a></li>'+
        '        </ul>'+
        '    </span>'+
        '</div>';
        

    var oBody=document.getElementsByTagName("body")[0];
    var oHead=document.getElementsByTagName("head")[0];

    // 加载样式
    function loadCSS(url,callback){
        var link=document.createElement("link");
        link.onload=function(){
            callback&&callback(this);
        }
        link.rel="stylesheet";
        link.href=url;
        oHead.appendChild(link);
    }

    // 加载JS
    function loadJS(url,callback){
        var scr=document.createElement("script");
        scr.onload=function(){
            callback&&callback(this);
        }
        scr.src=url;
        oHead.appendChild(scr);
    }

    // js处理
    function jsHandle(){
        var 
            $wrap=$("#com-nav"),
            $btnTgNav=$wrap.find(".nav-wrap"),
            $aLink=$btnTgNav.find("a");

        // 开启
        $btnTgNav.on("click",function(e){
            e.preventDefault();
            $(this).toggleClass('show');
        });

        $aLink.on("click",function(e){
            e.stopPropagation();
        })
    }
    
    loadJS("js/jquery.mobile.min.js",function(){
        loadCSS(urlCSS,function(){
            $("body").append(HTML);
            $("#com-nav").animate({"top":0},300);
            jsHandle();
        });
    });
})();