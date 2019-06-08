
var mymap = L.map('mapid').setView([24.45, 124.2], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

L.geoJSON(tatta_points, {}).addTo(mymap);

$("#tatta_points_table").append("<table><tbody></tbody></table>");

$.each(
    tatta_points,
    function(i, v) {
        var row_html = "<tr><td>"
                + i.toString()
                + "</td><td>"
                + v.properties.name.toString()
                + "</td></tr>";
        $("#tatta_points_table tbody").append(row_html);
    }
);
