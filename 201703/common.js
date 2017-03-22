!function(win) {
    function resize() {
        var domWidth = domEle.getBoundingClientRect().width;
        if(domWidth / v > 540){
            domWidth = 540 * v;
        }
        win.rem = domWidth / 32;
        domEle.style.fontSize = win.rem + "px";
    }
    var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement, viewport = dom.querySelector('meta[name="viewport"]'), flexible = dom.querySelector('meta[name="flexible"]');
    if (viewport) {
        var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        if(o){
            initial_scale = parseFloat(o[2]);
            v = parseInt(1 / initial_scale);
        }
    } else if(flexible) {
        var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
        if (o) {
            v = parseFloat(o[2]);
            initial_scale = parseFloat((1 / v).toFixed(2))
        }
    }
    if (!v && !initial_scale) {
        var n = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi));
        v = win.devicePixelRatio;
        v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
    }
    //没有viewport标签的情况下
    if (domEle.setAttribute("data-dpr", v), !viewport) {
        if (viewport = dom.createElement("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + initial_scale + ", maximum-scale=" + initial_scale + ", minimum-scale=" + initial_scale + ", user-scalable=no"), domEle.firstElementChild) {
            domEle.firstElementChild.appendChild(viewport)
        } else {
            var m = dom.createElement("div");
            m.appendChild(viewport), dom.write(m.innerHTML)
        }
    }
    win.dpr = v;
    win.addEventListener("resize", function() {
        clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
    }, false);
    win.addEventListener("pageshow", function(b) {
        b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
    }, false);
    resize();
}(window);

// header.js
!function(win) {   
    var logo_title="疾病大全";
    var chanel_guide_name = "疾病导航";
    var chanel_guide_url = "http://m.jiankang.com/jbdq/";

    document.write('<header class="header clearfix">');    
    if( page_index === 0){
        document.write('<h2 class="logo"><a href="http://m.jiankang.com/jbdq/" title="' +logo_title+ '">' +logo_title+ '</a></h2>');
        document.write('<h2 class="title">'+pageName+'</h2>');
        document.write('<a href="http://haoso.jiankang.com/" class="search_link"></a>');
        document.write('<a href="javascript:;" class="menu" id="JS_siteNav"></a>');
       
    }else if( pageName != '' && page_index === 1){
        document.write('<a href="javascript:history.back(-1);" class="goback"><i>返回</i></a>');
        document.write('<h2 class="title">'+pageName+'</h2>');
        document.write('<a href="http://haoso.jiankang.com/" class="search_link"></a>');
        document.write('<a href="javascript:;" class="menu" id="JS_siteNav"></a>');        
    }else{
        document.write('<a href="javascript:history.back(-1);" class="goback"><i>返回</i></a>');
        document.write('<h2 class="title">'+logo_title+'</h2>');  
        document.write('<a href="http://haoso.jiankang.com/" class="search_link"></a>');
        document.write('<a href="javascript:;" class="menu" id="JS_siteNav"></a>');
    }
    document.write('</header>');
    //document.write('<div id="fade" class="fade"></div>');
    //document.write('<div class="site_nav clearfix" >');
    //document.write('<div class="inner clearfix">');
    //document.write('<i class="arrow"></i>');
    //document.write('<dl class="sn_dl clearfix">');
    //document.write('<dt>服务</dt>');
    //document.write('<dd>');
    //document.write('<a href="http://m.jiankang.com/">首页</a>');
    //document.write('<a href="http://mask.jiankang.com/">问医生</a>');
    //document.write('<a href="http://m.jiankang.com/jbdq/">查疾病</a>');
    //document.write('<a href="http://jbk.jiankang.com/zhengzhuang/">查症状</a>');
    //document.write('<a href="http://myao.jiankang.com/">找药品</a>');
    //document.write('<a href="http://m.jiankang.com/hospital/">找医院</a>');
    //document.write('<a href="http://m.jiankang.com/doctor/">找医生</a>');
    //document.write('</dd>');
    //document.write('</dl>');
    //document.write('<dl class="sn_dl clearfix">');
    //document.write('<dt>频道</dt>');
    //document.write('<dd>');
    //document.write('<a href="http://m.jiankang.com/news/">新闻资讯</a>');
    //document.write('<a href="http://m.sex.jiankang.com/">健康两性</a>');
    //document.write('<a href="http://mjf.jiankang.com/">减肥馆</a>');
    //document.write('<a href="http://m.jiankang.com/yinshi/">健康饮食</a>');
    //document.write('<a href="http://m.jiankang.com/yangsheng/">健康养生</a>');
    //document.write('</dd>');
    //document.write('</dl>');
    //document.write('<dl class="sn_dl clearfix">');
    //document.write('<dt>频道导航</dt>');
    //document.write('<dd>');
    //document.write('<a href="'+chanel_guide_url+'">'+chanel_guide_name+'</a>');
    //document.write('</dd>');
    //document.write('</dl>');
    //document.write('<p><a href="http://m.jiankang.com/login/" class="btn" rel="nofollow"><em class="login">登录</em></a><a href="http://m.jiankang.com/register/" class="btn" rel="nofollow"><em class="register">注册</em></a></p>');
    //document.write('<span class="retract">收起</span>');
    //document.write('</div>');
    //document.write('</div>');
}(window);

