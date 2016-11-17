**[cookie的学习](http://blog.yemou.net/article/query/info/tytfjhfascvhzxcytp62)**

**设置cookie** 

每个cookie都是一个名/值对，可以把下面这样一个字符串赋值给document.cookie:
`document.cookie="userId=828";` 
如果要一次存储多个名/值对，可以使用分号加空格（; ）隔开，例如:
document.cookie="userId=828; userName=hulk"; 

**尽管document.cookie看上去就像一个属性，可以赋不同的值。但它和一般的属性不一样，改变它的赋值并不意味着丢失原来的值，例如连续执行下面两条语句:**
``` 
document.cookie="userId=828"; 
document.cookie="userName=hulk"; 
```
这时浏览器将维护两个cookie，分别是userId和userName，因此给document.cookie赋值更像执行类似这样的语句: 
代码如下:
```
document.addCookie("userId=828"); 
document.addCookie("userName=hulk"); 
```
事实上，浏览器就是按照这样的方式来设置cookie的，如果要改变一个cookie的值，只需重新赋值，例如:
document.cookie="userId=929"; 
这样就将名为userId的cookie值设置为了929。






