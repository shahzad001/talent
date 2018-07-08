/*
File				: charts.js
Associated file		: charts.html
Plugin dependency	: plugins/chart.js/Chart.bundle.js
*/

/* =========== Bar Chart ================= */
/* Vertical Bar ------------------------------------*/
var ctx = document.getElementById("chart_verticalBar");
var chart_verticalBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
/* ------------------------------------------------ */

/* Horizontal Bar -----------------------------------------*/
var ctx2 = document.getElementById("chart_horizontalBar");
var chart_horizontalBar = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
/* ------------------------------------------------ */

/* Stacked Bar --------------------------------------------------*/
var ctx3 = document.getElementById("chart_stackedBar");
var chart_stackedBar = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
		{
            label: '# of Votes',
            data: [10,5,18,10,10,12],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
    }
});
/* ------------------------------------------------ */



/* =========== Line Chart ================= */
/* Line Basic -------------------------------------------------*/
var ctx4 = document.getElementById("chart_basicLine");
var chart_basicLine = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: "My First dataset",
            data: [12, 19, 3, 5, 2, 3],
			fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },
		{
            label: "My Second dataset",
            data: [10,5,18,10,10,12],
			fill: false,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
		responsive: true,
		title:{
			display:true,
			text:'Chart.js Line Chart'
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
					labelString: 'Month'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}]
        }
    }
});
/* ------------------------------------------------ */

/* Line Styles -------------------------------------------------*/
var ctx5 = document.getElementById("chart_lineStyles");
var chart_lineStyles = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: "Unfilled",
            data: [12, 19, 3, 5, 2, 3],
			fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },
		{
            label: "Dashed",
            data: [10,5,18,10,10,12],
			fill: false,
			borderDash: [5, 5],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        },
		{
            label: "Filled",
            data: [7,10,12,12,10,16],
			fill: true,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
		responsive: true,
		title:{
			display:true,
			text:'Chart.js Line Chart'
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
					labelString: 'Month'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}]
        }
    }
});
/* ------------------------------------------------ */



/* =========== Linear Scale ================= */
/* Step Size ---------------------------------------------*/
var ctx6 = document.getElementById("chart_stepSize");
var chart_stepSize = new Chart(ctx6, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: "My First dataset",
            data: [72, 81, 39, 26, 72, 91],
			fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ]
        },
		{
            label: "My Second dataset",
            data: [68,79,51,52,70,52],
			fill: false,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ]
        }]
    },
    options: {
		responsive: true,
		title:{
			display:true,
			text:'Chart.js Line Chart'
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
					labelString: 'Month'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				},
				ticks: {
					min: 0,
					max: 100,
						
					// forces step size to be 5 units
					stepSize: 5
				}
			}]
        }
    }
});
/* ------------------------------------------------ */

/* Min & Mix ---------------------------------------------------*/
var ctx7 = document.getElementById("chart_minMax");
var chart_minMax = new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: "My First dataset",
            data: [24, 12, 36, 22, 41, 40],
			fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ]
        },
		{
            label: "My Second dataset",
            data: [37, 21, 22, 39, 18, 29],
			fill: false,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ]
        }]
    },
    options: {
		responsive: true,
		title:{
			display:true,
			text:'Chart.js Line Chart'
		},
        scales: {
			yAxes: [{
				ticks: {
					min: 10,
					max: 50
				}
			}]
        }
    }
});
/* ------------------------------------------------ */