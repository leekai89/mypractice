/**
 * 同过代理构造函数实现继承
 * @param Child Parent 分别为要继承的子类, 父类
 */
var inherit = (function(){
  var Proxy = function(){};
  return function(Child, Parent){
     Proxy.prototype = Parent.prototype;
     Child.prototype = new Proxy();
     Child.uber = Parent.prototype;
     Child.prototype.constructor = Child;
  }
}());