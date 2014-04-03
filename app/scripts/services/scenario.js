'use strict';

angular.module('pocSsiScenarioApp')
  .provider('scenario', function () {

		function Sample(value, _moment){
			this.value = value;
			this.date = _moment.toDate();

			// Since a sample is due to be displayed, there are frameworks (such as HighCharts) that demand
			// it to have x and y fields in order to display it in a chart.
			this.x = this.date.getTime();
			this.y = value;
		}

		function Scenario(data, startMoment){
			this.samples = [];

			for (var assetIndex = 0; assetIndex < data.length; assetIndex++)
			{
				var singleAssetSamples = data[assetIndex];
				this.samples[assetIndex] = [];

				var currentMoment = startMoment;
				for (var sampleIndex = 0; sampleIndex < singleAssetSamples.length; sampleIndex++)
				{
					var currentSampleValue = singleAssetSamples[sampleIndex];
					this.samples[assetIndex][sampleIndex] = new Sample(currentSampleValue, currentMoment);
					currentMoment.add("d", 1);
				}
			}
		}

		this.$get = function(){
				return new Scenario(this.sampleData, this.startDate);
		};


		this.setSampleData = function (data) {
			this.sampleData =data;
		};


		this.setStartDate = function(value, format){
			this.startDate = moment(value, format);
		};

  });
