
(function(){
var widget =
{
    id: "tutorial-hello",
    version: "1.0",
    title: "Hello World (tutorial)",
    description: "This is a simple tutorial widget.",
    copyright: "(C)2016 Ridgeback Network Defense, Inc. (GPL3)",
    render: function(e, source)
    {
        var count = 3;
        $(e + " .data").append("<h1>Hello, world!</h1>");
        $(e + " .value").append("There are " + count + " records.");
    } // render()
}; // widget
AWM.registerWidget(widget);
})();