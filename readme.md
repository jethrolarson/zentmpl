Examples
========

    var tm = "Hello, <%=this.name%>";
    var data = {"name":"jethro"};

Most performant for repeated use

    var hiTemplate = tmpl(tm);
    hiTemplate(data);
  
Single Use

    tmpl(tm)(data);

Use with jQuery

    $("ul").html(hiTemplate(data));

One-liner with jquery

    $("ul").html(tmpl("Hello, <%=this.name%>")({"name":"jethro"}));

As jquery plugin

    $.tmpl = tmpl;