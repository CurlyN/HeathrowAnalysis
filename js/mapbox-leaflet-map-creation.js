L.mapbox.accessToken = 'pk.eyJ1IjoibmF0YWx5b3NrIiwiYSI6IjcyMmFmZTIzNWE5NDNjZWFiOWQ4YWZjN2E3MDU1MmQ1In0.pHrpXPaQIvB-vcb1ssgcSQ';

var map = L.mapbox.map('map', 'mapbox.emerald')
  .setView([51.48, -0.33], 11);

var myURL = jQuery( 'script[src$="leaf.js"]' ).attr( 'src' ).replace( 'leaf.js', '' );

var myIcon = L.icon({
    iconUrl: '../images/pin24.png',
    iconSize: [30, 30],
    iconAnchor: [15, 25],
    popupAnchor: [0, -14]
});

for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
      .bindPopup( 'Sensor ' + markers[i].name+ '<br> <a href="#" onClick="drawChart('+markers[i].chart+');">Draw a chart</a>')
      .addTo( map );

  L.circle([markers[i].lat, markers[i].lng], 500, {
            color: getColor(markers[i].label),
            fillColor: getColor(markers[i].label),
            fillOpacity: 0.8
        }).addTo(map);

}



var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [20, 30, 40, 50, 60, 70, 80, 90],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);


L.control.layers({
}, {
    'No2': L.mapbox.featureLayer(isolines_l1),
    'Co': L.mapbox.featureLayer(points_layer2)
}).addTo(map);

