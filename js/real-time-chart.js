function realTime2(topic_put){
  $('#legend').empty();
  $('#chart_container').html(
    '<div id="y_axis"></div><div id="chart"></div><div id="x_axis"></div>'
  );
  topic2 = topic_put;
  console.log(topic2);

document.getElementById("real-time-notification2").innerHTML = "Topic: "+topic_put.toUpperCase();
var palette = new Rickshaw.Color.Palette( { scheme: 'spectrum2001' } );
var tv = 5000;

var graph = new Rickshaw.Graph({
    element: document.querySelector("#chart"),
    width: 700,
    height: 440,
    renderer: 'line',
    stroke: true,
    preserve: true,
    max: 140,
    series: new Rickshaw.Series.FixedDuration([{
      name: 'E20RF', color: palette.color()
    },
    {
      name: 'UB70JY', color: palette.color()
    },
    {
      name: 'TW25EG', color: palette.color()
    },
    {
      name: 'UB78PG', color: palette.color()
    },
    {
      name: 'TW25HL', color: palette.color()
    },
    {
      name: 'TW75ET', color: palette.color()
    },
    {
      name: 'SL42LS', color: palette.color()
    },
    {
      name: 'TW135AB', color: palette.color()
    },
    {
      name: 'TW712LJ', color: palette.color()
    },
    {
      name: 'TW110LJ', color: palette.color()
    }], undefined, {
        timeInterval: tv,
        maxDataPoints: 150
    })
});

var topic2;
var y_ticks = new Rickshaw.Graph.Axis.Y( {
  graph: graph,
  orientation: 'left',
  element: document.getElementById('y_axis')
} );

var time = new Rickshaw.Fixtures.Time.Local();
var hours = time.unit('minuts');

var xAxis = new Rickshaw.Graph.Axis.Time({
  graph: graph,
  timeUnit: hours,
  timeFixture: new Rickshaw.Fixtures.Time.Local()
});

var legend = new Rickshaw.Graph.Legend( {
        element: document.querySelector('#legend'),
        graph: graph
} );



$('#xAxis text').css('fill', 'white');

  graph.render();


function addRandomData(chart) {

    var data = {
      E20RF: parseFloat(localStorage.getItem("20630003")),

      UB70JY: parseFloat(localStorage.getItem("20630003")),

      TW25EG: parseFloat(localStorage.getItem("20630005")),
   
      UB78PG: parseFloat(localStorage.getItem("20630006")), 

      TW25HL: parseFloat(localStorage.getItem("20630003")),

      TW75ET: parseFloat(localStorage.getItem("20630008")),

      SL42LS: parseFloat(localStorage.getItem("20630003")),

      TW135AB: parseFloat(localStorage.getItem("20630003")),

      TW712LJ: parseFloat(localStorage.getItem("20630003")),

      TW110LJ: parseFloat(localStorage.getItem("20630012"))
    };
    console.log(data);
    chart.series.addData(data);
    graph.update();
}


for (var i=1;i<13;i++){
   localStorage.setItem(20630000+i, "");
}
document.getElementById("real-time-notification").innerHTML = "Please wait while the data is loaded";
console.log("before reading messages");




 if (!!window.EventSource) {
        debugger;
        var source = new EventSource("https://realtime.opensensors.io/v1/events/topics/%2Forgs%2FBreatheHEathrow%2F"+topic2.toLowerCase()+"");

                //Listening messages from the server. Sourse take message as it created on the server
              source.onmessage = function(event) {
              document.getElementById("real-time-notification").innerHTML = "Data is loaded";
                //As message is in JSOn format it is needed to be parsed. 
              var ev = JSON.parse(event.data, function(key, value) {
                if (key == 'date') return new Date(value);
                return value;
              });

              //spliting the value of the key=body
              var res = ev.payload.body.split('\"');
              res[12] = res[12].substr(1, res[12].length);
            
             //storung information in localstore to have an access to it later
              if (typeof(Storage) != "undefined") {
                        // Store
                        localStorage.setItem(ev.device, res[12]);
                    }
                   
              
              console.log(topic2);
              addRandomData(graph);  
              xAxis.render;

              //console.log("The information has been read from opensensors.io ");
                 
 //alert of recieving information
}
  }
      else {
               document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
            }
}