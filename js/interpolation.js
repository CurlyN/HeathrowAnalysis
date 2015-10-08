var isolines_l1 = L.mapbox.featureLayer().loadURL('bathymetry.geojson');
var isolines_l2 = L.mapbox.featureLayer().loadURL('bathymetry_no2.geojson');
var points_layer2 = L.mapbox.featureLayer();
//points_layer2.addTo(map);
var interpolations = new L.FeatureGroup();

function showIsobands(bathymetry, toppic){

  isolines_l1.removeLayer(map);
 document.getElementById("inter-map").innerHTML = "TOPIC: "+toppic.toUpperCase();


      $.getScript('http://breatheheathrow.co.nf/pages/turf.custom.js', function()
      {         
            points_layer2= L.mapbox.featureLayer().loadURL(bathymetry);

            points_layer2.on('ready', function () {

                var resolution = 125;
                var breaks = [30, 35, 40, 43, 45, 50, 53, 55, 60, 63, 65, 70, 73, 75, 80, 83, 85, 90, 93, 95, 100,110];
                var isolines2 = turf.isobands(points_layer2.toGeoJSON(), 'DepthMeter', resolution, breaks);
                isolines2.features.forEach(function (feature) {
                  feature.properties["fill"]=getColor(feature.properties.DepthMeter);
                  feature.properties["fill-opacity"] = 0.5;
                  feature.properties["stroke"] = getColor(feature.properties.DepthMeter);
                  feature.properties["stroke-width"] = 1;
                  feature.properties["stroke-opacity"] = 0.65;
                });
               L.mapbox.featureLayer().setGeoJSON(isolines2).addTo(map);

          });
      });

}

isolines_l1.on('ready', function () {
  
        var resolution = 125;
        var breaks = [30, 35, 40, 43, 45, 50, 53, 55, 60, 63, 65, 70, 73, 75, 80, 83, 85, 90, 93, 95, 100,110];
        var isolines = turf.isolines(isolines_l1.toGeoJSON(), 'DepthMeter', resolution, breaks);
        isolines.features.forEach(function (feature) {
          feature.properties["stroke"] = getColor(feature.properties.DepthMeter);
          feature.properties["stroke-width"] = 2;
          feature.properties["stroke-opacity"] = 0.8;
        });
       L.mapbox.featureLayer().setGeoJSON(isolines).addTo(map);

});


function getColorNoise(d) {
    return d > 600 ? '#2B000D':
           d > 500 ? '#44000D':
           d > 450 ? '#67000d':
           d > 400 ? '#a50f15':
           d > 350 ? '#cb181d' :
           d > 320  ? '#ef3b2c' :
           d > 300  ? '#fb6a4a' :
           d > 250  ? '#fc9272' :
           d > 200  ? '#fcbba1' :
           d > 150  ? '#FED4BD' :
           d > 100   ? '#fee0d2' :
                      '#fff5f0';
}

function showIsobandsNoise(bathymetry, toppic){

  isolines_l1.removeLayer(map);
 document.getElementById("inter-map").innerHTML = "TOPIC: "+toppic.toUpperCase();


      $.getScript('http://breatheheathrow.co.nf/pages/turf.custom.js', function()
      {         
            points_layer2= L.mapbox.featureLayer().loadURL(bathymetry);

            points_layer2.on('ready', function () {

                var resolution = 125;
                var breaks = [150, 200, 220, 250, 280, 300, 320, 350, 380, 400, 420, 450, 480, 500, 520, 550, 680, 600, 620, 650, 680, 700, 720, 750, 780, 800, 820, 850, 880, 900, 950];
                var isolines2 = turf.isobands(points_layer2.toGeoJSON(), 'DepthMeter', resolution, breaks);
                isolines2.features.forEach(function (feature) {
                  feature.properties["fill"]=getColorNoise(feature.properties.DepthMeter+10);
                  feature.properties["fill-opacity"] = 0.5;
                  feature.properties["stroke"] = getColorNoise(feature.properties.DepthMeter+10);
                  feature.properties["stroke-width"] = 1;
                  feature.properties["stroke-opacity"] = 0.65;
                });
               L.mapbox.featureLayer().setGeoJSON(isolines2).addTo(map);

          });
      });

}



function getColorTemperature(d) {
    return d > 28 ? '#2B000D':
           d > 25 ? '#44000D':
           d > 23 ? '#67000d':
           d > 20 ? '#a50f15':
           d > 18 ? '#cb181d' :
           d > 15  ? '#ef3b2c' :
           d > 12  ? '#fb6a4a' :
           d > 8  ? '#fc9272' :
           d > 5  ? '#fcbba1' :
           d > 2  ? '#FED4BD' :
           d > 0   ? '#fee0d2' :
                      '#fff5f0';
}

function showIsobandsTemperature(bathymetry, toppic){

  isolines_l1.removeLayer(map);
 document.getElementById("inter-map").innerHTML = "TOPIC: "+toppic.toUpperCase();


      $.getScript('http://breatheheathrow.co.nf/pages/turf.custom.js', function()
      {         
            points_layer2= L.mapbox.featureLayer().loadURL(bathymetry);

            points_layer2.on('ready', function () {

                var resolution = 125;
                var breaks = [0, 3, 5, 8, 10, 12, 15, 18, 20, 23, 25, 28, 30, 32];
                var isolines2 = turf.isobands(points_layer2.toGeoJSON(), 'DepthMeter', resolution, breaks);
                isolines2.features.forEach(function (feature) {
                  feature.properties["fill"]=getColorTemperature(feature.properties.DepthMeter);
                  feature.properties["fill-opacity"] = 0.5;
                  feature.properties["stroke"] = getColorTemperature(feature.properties.DepthMeter);
                  feature.properties["stroke-width"] = 1;
                  feature.properties["stroke-opacity"] = 0.65;
                });
               L.mapbox.featureLayer().setGeoJSON(isolines2).addTo(map);

          });
      });

}
