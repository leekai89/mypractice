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

/**
 * 获取指定url参数名称值
 * @param  {string} param [要获取的url参数名]
 * @return {string}       [返回值为字符串类型]
 */
var  getParameter = function(param){
      var  query  = window.location.search || "?name=zhangsan";
      if (query.length === 0) {
             return "";
      }else {
            var iStart = query.indexOf(param);  //查找参数出现的位置
            var iLen = param.length;
            if (iStart === -1) return "";     //没有找到指定的参数名称，直接返回一个空字符串
            iStart += iLen + 1;    
            var iEnd = query.indexOf("&", iStart);  //判断是否有多个参数, & 为参数连接符
            if (iEnd === -1) {
                    // 如果只有一个参数则直接从指定的位置返回截取的字符串
                    return  query.substring(iStart);
            }
            return  query.substring(iStart, iEnd); 
      }
};