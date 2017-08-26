function Evt(eventCategory, eventAction){
	var self = this;
	var eventLabel = null;
	var eventValue = null;	// Number
	var hitCallback = null;

	this.eventCategory = null;
	this.eventAction = null;

	var init = function(eventCategory, eventAction){
		self.eventCategory = eventCategory;
		self.eventAction = eventAction;
	};
	
	this.setEventLabel = function(inEventLabel){
		eventLabel = inEventLabel;
	};
	this.setEventValue = function(inEventValue){
		if(typeof inEventValue == "number"){
			eventValue = inEventValue;
		} else {
			console.error("Illegal argument type. Expected type: number. inEventValue=%s", inEventValue);
		}
	};
	this.setHitCallback = function(inHitCallback){
		if(typeof inHitCallback == "function"){
			hitCallback = inHitCallback;
		} else {
			console.error("Illegal argument type. Expected type: function. inHitCallback=%s", inHitCallback);
		}
	};
		
	this.getEvtObj = function(){
		var evtObj = {
			  'eventCategory': self.eventCategory,
			  'eventAction': self.eventAction
		};
		if(eventLabel != null){
			evtObj.eventLabel = eventLabel;
		}
		if(eventValue != null){
			evtObj.eventValue = eventValue;
		}
		if(hitCallback != null){
			evtObj.hitCallback = hitCallback;
		}
		return evtObj;
	};
	
	// Constructor
	init(eventCategory, eventAction);
	
}