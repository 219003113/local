
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"11cb97c6e9dce69db5690a542724688ae8380fb604854f15264127d67d5b1fe2", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.localzoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
$zoho.salesiq.ready = function (embedinfo) {
	    		$zoho.salesiq.visitor.trigger(function (triggername, visitorinfo) {
			// Your code here
		   	 if(triggername=='jsapi'){
			    console.log("nice JSAPI");
		    	}
	   	 });
		}
