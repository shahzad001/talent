Morris.Bar({
  element: 'bar_graph',
  data: [
    {x: '2011 Q1', y: 3, z: 2, a: 3},
    {x: '2011 Q2', y: 2, z: null, a: 1},
    {x: '2011 Q3', y: 0, z: 2, a: 4},
    {x: '2011 Q4', y: 2, z: 4, a: 3}
  ],
  xkey: 'x',
  ykeys: ['y', 'z', 'a'],
  labels: ['Y', 'Z', 'A']
}).on('click', function(i, row){
  console.log(i, row);
});

Morris.Area({
    element: 'area_graph',
    behaveLikeLine: true,
    gridEnabled: false,
    gridLineColor: '#dddddd',
    axes: true,
    fillOpacity:.7,
    data: [
        {period: '2010 Q1', iphone: 10, ipad: 10, itouch: 10},
        {period: '2010 Q2', iphone: 1178, ipad: 7294, itouch: 1441},
        {period: '2010 Q3', iphone: 2912, ipad: 12969, itouch: 301},
        {period: '2010 Q4', iphone: 4767, ipad: 397, itouch: 569},
        {period: '2011 Q1', iphone: 7810, ipad: 914, itouch: 293},
        {period: '2011 Q2', iphone: 670, ipad: 493, itouch: 181},
        {period: '2011 Q3', iphone: 4220, ipad: 3795, itouch: 588},
        {period: '2011 Q4', iphone: 25073, ipad: 5967, itouch: 175},
        {period: '2012 Q1', iphone: 10687, ipad: 34460, itouch: 22028},
        {period: '2012 Q2', iphone: 1000, ipad: 5713, itouch: 791}


    ],
    lineColors:['#62549a','#4aa9e9','#eac459'],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 0,
    lineWidth: 0,
    hideHover: 'auto'

});

Morris.Donut({
  element: 'donut_graph',
  data: [
    {value: 70, label: 'foo'},
    {value: 15, label: 'bar'},
    {value: 10, label: 'baz'},
    {value: 5, label: 'A really really long label'}
  ],
  formatter: function (x) { return x + "%"}
}).on('click', function(i, row){
  console.log(i, row);
});

var day_data = [
    {"elapsed": "I", "value": 34},
    {"elapsed": "II", "value": 24},
    {"elapsed": "III", "value": 3},
    {"elapsed": "IV", "value": 12},
    {"elapsed": "V", "value": 13},
    {"elapsed": "VI", "value": 22},
    {"elapsed": "VII", "value": 5},
    {"elapsed": "VIII", "value": 26},
    {"elapsed": "IX", "value": 12},
    {"elapsed": "X", "value": 19}
];
Morris.Line({
    element: 'line_graph',
    data: day_data,
    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['value'],
    lineColors:['#4aa9e9'],
    parseTime: false
});

Morris.Area({
    element: 'area-line_graph',
    behaveLikeLine: false,
    data: [
        {x: '2011 Q1', y: 3, z: 3},
        {x: '2011 Q2', y: 2, z: 1},
        {x: '2011 Q3', y: 2, z: 4},
        {x: '2011 Q4', y: 3, z: 3},
        {x: '2011 Q5', y: 3, z: 4}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
    lineColors:['#4aa9e9','#eac459']
});