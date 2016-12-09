###overflow属性的表现
	overflow属性值有 visible, hidden, scroll, auto, inherit
	css3 overflow-x和overflow-y属性 
	1.如果overflow-x和overflow-y的值相同则等同于overflow
	2.如果overflow-x和overflow-y的值不同,且其中的一个属性的值被赋予visible,另一个属性值被赋予
	 hidden/scroll/hidden其中的一个，那么属性值为visible的属性值会被重置为auto;
	
	 三如何让overflow属性起作用
	 1.非display:inline 水平的元素
	 2.对应方位的尺寸限制。width/height/max-width/max-height/absolute拉伸
	 3.对于单元格td等即使设置了尺寸大小和overflow:hidden也不起作用,这时需要table为
	 table-layout:fixed状态才行。

	 四滚动条出现的条件
	 1.overflow:auto/overflow:scroll (html/textarea默认会出现)
	 2.内容的尺寸超出了容器的尺寸限制
	 
	 五 body/html 与滚动条
	 无论什么浏览器，默认的滚动条均来之html元素而不是body元素
	 六JS与滚动高度
	 chrome浏览器是: document.body.scrollTop
	 其他浏览器是: document.documentElement.scrollTop
	 var st = document.documentElement.scrollTop || document.body.scrollTop;
	 起 overflow的padding-bottom缺失
	 chrome浏览器不会其他所有的浏览器都会缺失padding-bottom,这样就导致不一样的
	 scrollHeight(元素内容的高度)
	 七滚动条的宽度机制
	 滚动条会占用容器的可用宽度或者高度
	 八overflow:auto的潜在布局隐患
	 滚动条会占用容器的尺寸,原本和谐的布局,滚动条出现后可能挂掉
	 久水平居中跳动问题的修复
	 1.html{overflow-y: scroll;}   不推荐的做法
	 2.padding-left: calc(100vw - 100%);     100vw-浏览器的宽度 100% 可用内容的宽度
	十自定义滚动条-webkit内核
	整体部分
	::-webkit-scrollbar
	两端的按钮
	::-webkit-scrollbar-button
	外层轨道
	::-webkit-scrollbar-track
	内层轨道
	::-webkit-scrollbar-track-piece
	滚动滑块
	::-webkit-scrollbar-thumb
	边角
	::-webkit-scrollbar-corner

	自定义滚动条插件
	gitHub: https://github.com/malihu/malihu-custom-scollbar-plugin

	ios原生滚动回调效果
	-webkit-overflow-scrolling: touch;

	十一 overflow与BFC
	overflow: auto,overflow:hidden,overflow:scroll能触发BFC
	一般有三种应用
	①清除浮动的影响
	②避免margin穿透
	③两栏自适应布局