var registrirani = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var razkriti = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var registriraniUmishleniUbiistva = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var razkritiUmishleniUbiistva = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var registriraniGrabeji = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var razkritiGrabeji = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var registriraniKrajbi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var razkritiKrajbi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var registriraniPosegatelstvaSprqmoMPS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var razkritiPosegatelstvaSprqmoMPS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var broiPrestapleniqNarkotici = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var razkritiPrestapleniqNarkotici = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var feedCallback = function() {
	var temp = JSON.parse(this.response);
	var index = temp.mesec - 1;
	
	registrirani[index] = temp.registrirani;
	razkriti[index] = temp.razkritiChislo;

	registriraniUmishleniUbiistva[index] = temp.registriraniUmishleniUbiistva;
	razkritiUmishleniUbiistva[index] = temp.razkritiUmishleniUbiistva;

	registriraniGrabeji[index] = temp.registriraniGrabeji;
	razkritiGrabeji[index] = temp.razkritiGrabeji;

	registriraniKrajbi[index] = temp.registriraniKrajbi;
	razkritiKrajbi[index] = temp.razkritiKrajbi;

	registriraniPosegatelstvaSprqmoMPS[index] = temp.registriraniPosegatelstvaSprqmoMPS;
	razkritiPosegatelstvaSprqmoMPS[index] = temp.razkritiPosegatelstvaSprqmoMPS;

	broiPrestapleniqNarkotici[index] = temp.broiPrestapleniqNarkotici;
	razkritiPrestapleniqNarkotici[index] = temp.razkritiPrestapleniqNarkotici;

	window.myLine.update();
}

var newLegendClickHandler = function(e, legendItem) {
    var index = legendItem.datasetIndex;
    let ci = this.chart;
    ci.data.datasets[index].hidden = !ci.data.datasets[index].hidden;
    if(index % 2 == 0) ci.data.datasets[index + 1].hidden = !ci.data.datasets[index + 1].hidden;
    else ci.data.datasets[index - 1].hidden = !ci.data.datasets[index - 1].hidden;

    ci.update();
};
var colors = ['#4bd2db','#cf4bdb','#1a97ff','#ff6b1a','#a43f3b','#95cd89','#8e00ff','#d4b220','#e285a6','#7d6eec','#615dcf','#5dcf98'];
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var legendColors = new Array(6);
for(i = 0; i < 6; i++) {
	legendColors[i] = context.createLinearGradient(0,0,40,0);
	legendColors[i].addColorStop(0, colors[2*i + 1]);
 	legendColors[i].addColorStop(1, colors[2*i]);
}
var config = {
	type: 'line',
	data: {
		labels: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли','Август', 'Септември', 'Октомври', 'Ноември'/*, 'Декември'*/],
		datasets: [{
			label: 'Регистирани Общо',
			backgroundColor: colors[0],
			borderColor: colors[0],
			data: registrirani,
			fill: false,
			cubicInterpolationMode: 'monotone',
			hidden: false
		}, {
			label: 'Разкрити Общо',
			fill: false,
			backgroundColor: colors[1],
			borderColor: colors[1],
			data: razkriti,
			cubicInterpolationMode: 'monotone',
			hidden: false
		}, {
			label: 'Регистирани Убийства',
			fill: false,
			backgroundColor: colors[2],
			borderColor: colors[2],
			data: registriraniUmishleniUbiistva,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Разкрити Убийства',
			fill: false,
			backgroundColor: colors[3],
			borderColor: colors[3],
			data: razkritiUmishleniUbiistva,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Регистирани Грабежи',
			fill: false,
			backgroundColor: colors[4],
			borderColor: colors[4],
			data: registriraniGrabeji,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Разкрити Грабежи',
			fill: false,
			backgroundColor: colors[5],
			borderColor: colors[5],
			data: razkritiGrabeji,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Регистирани Кражби',
			fill: false,
			backgroundColor: colors[6],
			borderColor: colors[6],
			data: registriraniKrajbi,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Разкрити Кражби',
			fill: false,
			backgroundColor: colors[7],
			borderColor: colors[7],
			data: razkritiKrajbi,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Регистирани Посегателства срещу МПС',
			fill: false,
			backgroundColor: colors[8],
			borderColor: colors[8],
			data: registriraniPosegatelstvaSprqmoMPS,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Разкрити Посегателства срещу МПС',
			fill: false,
			backgroundColor: colors[9],
			borderColor: colors[9],
			data: razkritiPosegatelstvaSprqmoMPS,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Регистирани Престъпления с наркотици',
			fill: false,
			backgroundColor: colors[10],
			borderColor: colors[10],
			data: broiPrestapleniqNarkotici,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}, {
			label: 'Разкрити Престъпления с наркотици',
			fill: false,
			backgroundColor: colors[11],
			borderColor: colors[11],
			data: razkritiPrestapleniqNarkotici,
			cubicInterpolationMode: 'monotone',
			hidden: true
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			//text: 'Chart.js Line Chart'
		},
		legend: {
			onClick: newLegendClickHandler,
            labels: {
                filter: function(item, chart) {
                    // Logic to remove a particular legend item goes here
                    var index = item.datasetIndex;
                    item.fillStyle = legendColors[index/2];
                    var shouldRemove = !item.text.includes('Разкрити');
                    if(shouldRemove) {
                    	var strs = item.text.split(" ");
	                    var str = strs[1];
	                    for(var i = 2; i < strs.length; i++) {
	                    	str = str + " " + strs[i];
	                    }
	                }
                    item.text = str;
                    return shouldRemove;
                }
        	}
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
				}
			}]
		}
	}
};

window.onload = function() {
	var ctx = document.getElementById('canvas').getContext('2d');
	var url, request;
	for(var i = 1; i < 12; i++) {
		if(i >= 10) url = "./2019" + i.toString() + ".json";
		else url = "./20190" + i.toString() + ".json";

		request = new XMLHttpRequest();
		request.addEventListener("load", feedCallback);
		request.open("GET", url);
		request.send();
	}
	window.myLine = new Chart(ctx, config);
};
