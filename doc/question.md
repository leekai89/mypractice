- JS 关于 instanceOf 运算符的深入理解
- babel bower webpack
- promise deferred
- babel
- rem单位
- css mixin
- 图片延迟加载和懒加载
- 自适应, 响应式, 流体布局

Javascript、Jquery获取浏览器和屏幕各种高度宽度

Javascript:

alert(document.body.clientWidth);        //网页可见区域宽(body)

alert(document.body.clientHeight);       //网页可见区域高(body)

alert(document.body.offsetWidth);       //网页可见区域宽(body)，包括border、margin等

alert(document.body.offsetHeight);      //网页可见区域宽(body)，包括border、margin等

alert(document.body.scrollWidth);        //网页正文全文宽，包括有滚动条时的未见区域

alert(document.body.scrollHeight);       //网页正文全文高，包括有滚动条时的未见区域

alert(document.body.scrollTop);           //网页被卷去的Top(滚动条)

alert(document.body.scrollLeft);           //网页被卷去的Left(滚动条)

alert(window.screenTop);                     //浏览器距离Top

alert(window.screenLeft);                     //浏览器距离Left

alert(window.screen.height);                //屏幕分辨率的高

alert(window.screen.width);                 //屏幕分辨率的宽

alert(window.screen.availHeight);          //屏幕可用工作区的高

alert(window.screen.availWidth);           //屏幕可用工作区的宽

Jquery:

alert($(window).height());                           //浏览器当前窗口可视区域高度

alert($(document).height());                        //浏览器当前窗口文档的高度

alert($(document.body).height());                //浏览器当前窗口文档body的高度

alert($(document.body).outerHeight(true));  //浏览器当前窗口文档body的总高度 包括border padding margin

alert($(window).width());                            //浏览器当前窗口可视区域宽度

alert($(document).width());                        //浏览器当前窗口文档对象宽度

alert($(document.body).width());                //浏览器当前窗口文档body的宽度

alert($(document.body).outerWidth(true));  //浏览器当前窗口文档body的总宽度 包括border padding margin