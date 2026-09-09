new Morris.Donut({
  element: 'company',
  data: [
    { label: 'Windows', value: 72 },
    { label: 'MacOS', value: 16 },
    { label: 'Linux', value: 4.7 }
  ],

  colors: ['rgb(0, 120, 215)', 'grey', 'rgb(255, 204, 51)'],
  formatter: function (x) { return x + "%" }
});


new Morris.Line({
  element: 'bitcoin',

  data: [
    { year: '2010', Cost: 0.39},
    { year: '2011', Cost: 32},
    { year: '2012', Cost: 13.50},
    { year: '2013', Cost: 1151},
    { year: '2014', Cost: 990},
    { year: '2015', Cost: 465},
    { year: '2016', Cost: 970},
    { year: '2017', Cost: 20000},
    { year: '2018', Cost: 17000},
    { year: '2019', Cost: 13785},
    { year: '2020', Cost: 29000},
    { year: '2021', Cost: 69000},
    { year: '2022', Cost: 48000},
    { year: '2023', Cost: 44000},
    { year: '2024', Cost: 100000},
    { year: '2025', Cost: 80000}
  ],

  xkey: 'year',
  ykeys: ['Cost'],
  labels: ['Cost'],

  lineColors: ['gold'],
  smooth: true
});

new Morris.Area({
  element: 'windows_linux',

  data: [
    { year: '2010', people1: 1100000000, people2: 12000000},
    { year: '2011', people1: 1150000000, people2: 14000000},
    { year: '2012', people1: 1200000000, people2: 15000000},
    { year: '2013', people1: 1250000000, people2: 18000000},
    { year: '2014', people1: 1300000000, people2: 20000000},
    { year: '2015', people1: 1350000000, people2: 22000000},
    { year: '2016', people1: 1400000000, people2: 26000000},
    { year: '2017', people1: 1420000000, people2: 28000000},
    { year: '2018', people1: 1450000000, people2: 30000000},
    { year: '2019', people1: 1480000000, people2: 32000000},
    { year: '2020', people1: 1500000000, people2: 25000000},
    { year: '2021', people1: 1500000000, people2: 40000000},
    { year: '2022', people1: 1450000000, people2: 48000000},
    { year: '2023', people1: 1420000000, people2: 55000000},
    { year: '2024', people1: 1400000000, people2: 60000000},
    { year: '2025', people1: 1380000000, people2: 75000000}
  ],

  xkey: 'year',
  ykeys: ['people1', 'people2'],
  labels: ['Windows', 'Linux'],

  lineColors: ['rgb(0, 120, 215)', 'rgb(255, 204, 51)'],
  smooth: true,
  behaveLikeLine: true,
});

new Morris.Bar({
  element: 'value',

  data: [
    {name: "Facebook", value: 1670000000000},
    {name: "Instagram", value: 600000000000},
    {name: "Twitter", value: 40000000000},
    {name: "Telegram", value: 30000000000},
    {name: "VK", value: 2000000000},
    {name: "OK", value: 270000000},
    {name: "Discord", value: 15000000000},
    {name: "Zoom", value: 27400000000}
  ],

  xkey: 'name',
  ykeys: ['value'],
  labels: ['value'],
});