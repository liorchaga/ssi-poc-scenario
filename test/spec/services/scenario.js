'use strict';

	describe('Service: scenario', function () {



	  // instantiate service
	  var myScenarioProvider;
	  beforeEach(function () {
		  // Initialize the service provider by injecting it to a fake module's config block
		  angular.module('testApp', function () {})
			  .config(function (scenarioProvider) {
					myScenarioProvider = scenarioProvider;
				  	myScenarioProvider.setStartDate("2014-01-01");
				  	myScenarioProvider.setSampleData([[0,1,2]]);
			  });
		  // Initialize myApp injector
		  module('pocSsiScenarioApp', 'testApp');

		  // Kickstart the injectors previously registered with calls to angular.mock.module
		  inject(function () {});
	  });

		'use strict';

		it('should be a simple scenario', function(){

				var myScenario =  myScenarioProvider.$get();
				expect(myScenario.samples[0][2].x).toBe(moment("2014-01-03").toDate().getTime());
		});
	});
