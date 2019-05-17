var source = {
	log : function(){
		return [{
			id: 1234,
                src_ip: "1.2.3.4",
                src_mac: "AABBCCDD",
                timestamp: "1234567890",
                description: "Very bad thing",
                type: 'threat'
            },
            {
			id: 1235,
                src_ip: "5.2.3.4",
                src_mac: "XXYYZZ",
                timestamp: "1234567890",
                description: "Very Very bad thing",
                type: 'threat'
            }];
	},
	getLogField : function(item, fieldName){
		return item[fieldName];
	}
};

var AWM = {
	widgets:[],
	container:null,
	registerWidget : function(widget){
		this.widgets.push(widget);
	},
	renderWidgets : function(){
		var self = this;
		this.widgets.forEach(function(widget){
			var widgetNode = $("<li id=" + widget.id + "><div class='data'></div><div class='value'></div></li>")
			$(self.container).append(widgetNode);
			widget.render(("#" + widget.id), source);
		});
	},
	init: function(element){
		this.container = element;
	}
}

document.addEventListener('DOMContentLoaded', function(evt){
	AWM.init(document.getElementById("widgets"));
	AWM.renderWidgets();
});