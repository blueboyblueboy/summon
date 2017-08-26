var Tracking = {
	setup: function(){
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
           })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
	  ga('create', 'UA-46259877-1', 'rhcloud.com');
	  ga('require', 'ecommerce', 'ecommerce.js');	//eCommerce
	  ga('set', 'dimension1', Tracking.getCustTier());	// Custom Dimension
	  ga('send', 'pageview');
	},
	fireEvent: function(evt){
		if(evt){
			var evtObj = {
				'hitType': 'event'
			};
			var gaEvtObj = $.extend(true, {}, evtObj, evt.getEvtObj());
			ga('send', gaEvtObj);
	  		console.info("event sent:");
	  		console.dir(gaEvtObj);
		}
	},
	sendTxnAndItemsData: function(txn, items){
		if(txn || items){
			if(txn){
				ga('ecommerce:addTransaction', txn.getTxnObj());
		  		console.debug("Added Txn:");
		  		console.dir(txn.getTxnObj());
			}
			if(items && items != null){
				for(var i=0; i<items.length; i++){
					ga('ecommerce:addItem', items[i].getItemObj());
			  		console.debug("Added Item:");
			  		console.dir(items[i].getItemObj());
				}
			}
			ga('ecommerce:send');
	  		console.info("eCommerce data sent");
		}
	},
	getCustTier: function(){
		//Testing
		return "Premier";
	}
}

// Init Singleton
Tracking.setup();
