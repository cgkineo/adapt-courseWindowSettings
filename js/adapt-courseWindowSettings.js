define([ 
	"core/js/adapt" 
], function(Adapt) {

	function checkPageNameMatches(pageNames, pathName) {
		//console.log("checkPageNameMatches", pageNames, pathName);
		if(!pageNames || pageNames.length === 0) return true;

		var arr = pageNames.split(",");
		for(var i = 0, count = arr.length; i < count; i++) {
			if(pathName.indexOf($.trim(arr[i])) > -1) {
				return true;
			}
		}
	}

	function getSizeParameters(params) {
		//console.log("getSizeParameters", params);
		var arr = params.split(",");
		if(arr.length !== 2) {
			throw new Error("courseWindowSettings: Exactly two window resize values are required.");
		} else {
			if($.trim(arr[0]) === "availWidth") {
				arr[0] = screen.availWidth;
			}
			if($.trim(arr[1]) === "availHeight") {
				arr[1] = screen.availHeight;
			}

			return { width: arr[0], height: arr[1] };
		}
	}

	Adapt.once("configModel:dataLoaded", function() {
		var config = Adapt.config.get("_courseWindowSettings");

		if (!config || !config._isEnabled) return;

		if(checkPageNameMatches(config._restrictTo, document.location.pathname)) {
			if(config._moveTo) {
				var arr = config._moveTo.split(",");
				top.window.moveTo(arr[0], arr[1]);
			}
			if(config._resizeTo) {
				try {
					var sizeParams = getSizeParameters(config._resizeTo);
					top.window.resizeTo(sizeParams.width, sizeParams.height);
				} catch(e) {
					console.error(e);
				}
			}
		}
	});

});