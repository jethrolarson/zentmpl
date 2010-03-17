/*: Simple javascript templating
  Adapted from John Resig's microtemplates
  #takes: 
    @tm:
      #string text of template
  #returns compiled template #function which takes a context as it's only param
  
  
*/
function tmpl(tm){
  var fn = new Function("obj","var p=[];(function(){p.push('" +
    tm
      .replace(/[\r\t\n]/g, " ")
      .split("{%").join("\t")
      .replace(/((^|%})[^\t]*)'/g, "$1\r")
      .replace(/\t=(.*?)%}/g, "',$1,'")
      .split("\t").join("');")
      .split("%}").join("p.push('")
      .split("\r").join("\\'")
    + "');}).call(obj); return p.join('');");
  return fn;
}

/* Examples: 

var tm = "Hello, <%=this.name%>";
var data = {"name":"jethro"};

//Most performant for repeated use
var hi = tmpl(tm);
hi(data);
  
//Single Use
tmpl(tm)(data);

//Single Use with jquery
$("ul").html(tmpl($("#mytemplate").html())([{"fu":"bar"},{"fu":"sna"}]));


//As jquery plugin
$.tmpl = tmpl;
*/