var chart1 = d3.select('#gdp');
var chart2 = d3.select('#bb');

var year1 = "1999";
var year2 = "2000";

var gdp = [ [year1, 11.9], [year2, 12.5] ];
var bb = [ [year1, 157], [year2, 290] ];

var makeChart = function() {

    chart1.selectAll('div')
	.data(gdp)
	.enter()
	.append('div')
	.style('width', function(d) {
	    return d[1]*30 + 'px';
	})
	.text( function(d) {
	    return d[0] + ': $' + d[1] + ' TRIL';
	});

    chart2.selectAll('div')
	.data(bb)
	.enter()
	.append('div')
	.style('width', function(d) {
	    return Math.abs(d[1]) + 'px';
	})
	.text( function(d) {
	    return d[0] + ': $' + d[1] + ' BIL';
	});

}

makeChart();
