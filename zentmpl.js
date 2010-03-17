/*: Simple javascript templating
  Adapted from John Resig's microtemplates
  #takes: 
    @tm:
      #string text of template
  #returns compiled template #function which takes a context as it's only param
*/
function zentmpl(tm){
  return new Function("obj","var p=[];(function(){p.push('" +
    tm
      .replace(/[\r\t\n]/g, " ")
      .split("{%").join("\t")
      .replace(/((^|%})[^\t]*)'/g, "$1\r")
      .replace(/\t=(.*?)%}/g, "',$1,'")
      .split("\t").join("');")
      .split("%}").join("p.push('")
      .split("\r").join("\\'")
    + "');}).call(obj); return p.join('');");
}