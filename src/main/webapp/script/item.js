function Item(txnId, name, sku){
	var self = this;
	var category = null;
	var price = null;	// String
	var quantity = null;	// String

	this.txnId = null;
	this.name = null;
	this.sku = null;

	var init = function(txnId, name, sku){
		self.txnId = txnId;
		self.name = name;
		self.sku = sku;
	};
	
	this.setCategory = function(inCategory){
		category = inCategory;
	};
	this.setPrice = function(inPrice){
		price = inPrice;
	};
	this.setQuantity = function(inQuantity){
		quantity = inQuantity;
	};
		
	this.getItemObj = function(){
		return {
		  'id': self.txnId,                      // Transaction ID. Required.
		  'name': self.name,                     // Product name. Required.
		  'sku': self.sku,                       // SKU/code.
		  'category': category,                  // Category or variation.
		  'price': price,                        // Unit price.
		  'quantity': quantity                   // Quantity.
		};
	};
	
	// Constructor
	init(txnId, name, sku);
	
}