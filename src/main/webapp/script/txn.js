function Txn(id){
	var self = this;
	var affiliation = null;
	var revenue = null;	// String
	var shipping = null;	// String
	var tax = null;		// String

	this.id = null;

	var init = function(id){
		self.id = id;
	};
	
	this.setAffiliation = function(inAffiliation){
		affiliation = inAffiliation;
	};
	this.setRevenue = function(inRevenue){
		if(typeof inRevenue == "string"){
			revenue = inRevenue;
		} else {
			console.error("Illegal argument type. Expected type: string. inRevenue=%s", inRevenue);
		}
	};
	this.setShipping = function(inShipping){
		if(typeof inShipping == "string"){
			shipping = inShipping;
		} else {
			console.error("Illegal argument type. Expected type: string. inShipping=%s", inShipping);
		}
	};
	this.setTax = function(inTax){
		if(typeof inTax == "string"){
			tax = inTax;
		} else {
			console.error("Illegal argument type. Expected type: string. inTax=%s", inTax);
		}
	};
		
	this.getTxnObj = function(){
		return {
		  'id': self.id,                      // Transaction ID. Required.
		  'affiliation': affiliation,         // Affiliation or store name.
		  'revenue': revenue,                 // Grand Total.
		  'shipping': shipping,               // Shipping.
		  'tax': tax                          // Tax.
		};
	};
	
	// Constructor
	init(id);
	
}