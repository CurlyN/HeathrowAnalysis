var isolines_l1 = L.mapbox.featureLayer().loadURL('bathymetry.geojson');
var isolines_l2 = L.mapbox.featureLayer().loadURL('bathymetry_no2.geojson');
var points_layer2 = L.mapbox.featureLayer();
//points_layer2.addTo(map);
var interpolations = new L.FeatureGroup();


function showIsobands(bathymetry, toppic){
  $('#panel-body').html(
    '<div id="map"></div>'
  );
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




function showIsobandsNoise(bathymetry, toppic){
  $('#panel-body').html(
    '<div id="map"></div>'
  );
 document.getElementById("inter-map").innerHTML = "TOPIC: "+toppic.toUpperCase();


      $.getScript('http://breatheheathrow.co.nf/pages/turf.custom.js', function()
      {         
            points_layer2= L.mapbox.featureLayer().loadURL(bathymetry);

            points_layer2.on('ready', function () {

                var resolution = 125;
                var breaks = [100, 150, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700];
                var isolines2 = turf.isobands(points_layer2.toGeoJSON(), 'DepthMeter', resolution, breaks);
                isolines2.features.forEach(function (feature) {
                  feature.properties["fill"]=getColorNoise(feature.properties.DepthMeter+50);
                  feature.properties["fill-opacity"] = 0.5;
                  feature.properties["stroke"] = getColorNoise(feature.properties.DepthMeter+50);
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
