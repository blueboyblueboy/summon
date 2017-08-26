function Experiment(renderers, domain){
	var self = this;
	var chosenLayout = -1;

	this.renderers = null;
	this.domain = null;

	var chooseLayout = function(){
		if(cxApi){
			chosenLayout = cxApi.chooseVariation();	// Will record the values for the later-loaded Google Analytics library to include in its page visit event
			console.info("Experiment chosenLayout=%d", chosenLayout);
		}
	};
	
	var init = function(renderers, domain){
		try{
			self.renderers = renderers;
			self.domain = domain;
			if(cxApi){
				if(domain !== null){
					cxApi.setDomainName(domain);
				}
				chooseLayout();
				console.debug("Experiment init completed");
			} else {
				throw "Failed to load & init Experiment API library!";
			}
		} catch(err){
			console.error("Experiment init failed! Error: %s", err);
		}
	};

	this.renderPage = function(designatedLayout){
		console.debug("Experiment renderPage");
		if(designatedLayout !== undefined && designatedLayout !== null){
			console.info("Experiment designatedLayout=%d", designatedLayout);
			self.renderers[designatedLayout]();
		} else if(chosenLayout !== undefined && chosenLayout !== null && chosenLayout > -1){
			self.renderers[chosenLayout]();
		} else {
			console.error("renderPage failed! layout index is not init-ed!")
		}
	};
	
	this.getChosenLayout = function(){
		return chosenLayout;
	};
	
	// Constructor
	init(renderers, domain);
	
}