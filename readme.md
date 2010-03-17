Examples
========

    var tm = "Hello, <%=this.name%>";
    var data = {"name":"jethro"};

Most performant for repeated use

    var hiTemplate = zentmpl(tm);
    hiTemplate(data);
  
Single Use

    zentmpl(tm)(data);

Use with jQuery

    $("ul").html(hiTemplate(data));

One-liner with jquery

    $("ul").html(zentmpl("Hello, <%=this.name%>")({"name":"jethro"}));

As jquery plugin

    $.tmpl = zentmpl;