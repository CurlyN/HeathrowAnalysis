
var kk=0;
  function drawChart(topic){
    document.getElementById("history-chart-note2").innerHTML = "TOPIC: "+topic.toUpperCase();
   document.getElementById("history-chart-note").innerHTML = "Please, wait whle data is loading ";
    kk=0;
    var values_at_each_hour_chart =[];
    var min=1000;
  for (var i=3; i<=12; i++){
     values_at_each_hour_chart[i]= getHoursValue(20630000+i, topic);
     var check =0;
     
     console.log(i);
  }
console.log(values_at_each_hour_chart);
var val=[];
  

  document.getElementById("history-chart-note").innerHTML = "Data has been loaded ";

console.log("finish reading");

  var chart = new Chartist.Line('.ct-chart', {
  labels: time_line,
  series: [ {
    name: "4",
    color: "#fee0d2",
    data: values_at_each_hour_chart[4]
  },{
  name: "5",
  color: "#fee0d2",
  data: values_at_each_hour_chart[5]
  },{
  name: "6",  
  color: "#fee0d2",
  data: values_at_each_hour_chart[6]
  },{
  name: "7",
  color: "#fee0d2",
  data: values_at_each_hour_chart[8]
  },{
  name: "8",
  color: "#fee0d2",
  data: values_at_each_hour_chart[9]
  },{
  name: "9",
  color: "#fee0d2",
  data: values_at_each_hour_chart[12]
  },{
  name: "10",
  color: "#fee0d2",
  data: values_at_each_hour_chart[10]
  },{
  name: "11",
  color: "#fee0d2",
  data: values_at_each_hour_chart[11]
  },{
  name: "12",
  color: "#fee0d2",
  data: values_at_each_hour_chart[7]
  }
  
  ]
  
},
{
  low:-10,
  plugins: [
        Chartist.plugins.legend()
    ]
});


/*  //Part additing animation to a chart
  [values_at_each_hour_chart[3],
  values_at_each_hour_chart[4],
  values_at_each_hour_chart[5],
  values_at_each_hour_chart[6],
  values_at_each_hour_chart[7],
  values_at_each_hour_chart[8],
  values_at_each_hour_chart[9],
  values_at_each_hour_chart[10],
  values_at_each_hour_chart[11],
  values_at_each_hour_chart[12]]

  var chart = new Chartist.Line('.ct-chart', {
  labels: time_line,
  series: [
    values_at_each_hour_chart
    ]
}, {
  low: min
});*/
/*
// Let's put a sequence number aside so we can use it in the event callbacks
//,  showArea: true
var seq = 0,
  delays = 80,
  durations = 500;

// Once the chart is fully created we reset the sequence
chart.on('created', function() {
  seq = 0;

});

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
chart.on('draw', function(data) {
  seq++;

  if(data.type === 'line' || data.type === 'area') {
    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
    data.element.animate({
      opacity: {
        // The delay when we like to start the animation
        begin: seq * delays + 1000,
        // Duration of the animation
        dur: durations,
        // The value where the animation should start
        from: 0,
        // The value where it should end
        to: 1
      }
    });
  } else if(data.type === 'label' && data.axis === 'x') {
    data.element.animate({
      y: {
        begin: seq * delays,
        dur: durations,
        from: data.y + 100,
        to: data.y,
        // We can specify an easing function from Chartist.Svg.Easing
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'label' && data.axis === 'y') {
    data.element.animate({
      x: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 100,
        to: data.x,
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'point') {
    data.element.animate({
      x1: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      x2: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      opacity: {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'grid') {
    // Using data.axis we get x or y which we can use to construct our animation definition objects
    var pos1Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '1'] - 30,
      to: data[data.axis.units.pos + '1'],
      easing: 'easeOutQuart'
    };

    var pos2Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '2'] - 100,
      to: data[data.axis.units.pos + '2'],
      easing: 'easeOutQuart'
    };

    var animations = {};
    animations[data.axis.units.pos + '1'] = pos1Animation;
    animations[data.axis.units.p5os + '2'] = pos2Animation;
    animations['opacity'] = {
      begin: seq * delays,
      dur: durations,
      from: 0,
      to: 1,
      easing: 'easeOutQuart'
    };

    data.element.animate(animations);
  } 
});


chart.on('created', function() {
  if(window.__exampleAnimateTimeout) {
    clearTimeout(window.__exampleAnimateTimeout);
    window.__exampleAnimateTimeout = null;
  }
 
});
  /*} else
  { 
      console.log("no data");
      alert("Unfortunately, we received no data. Try another sensor please.");} 
*/

}

