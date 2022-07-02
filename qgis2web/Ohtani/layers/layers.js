var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&hl=jp&x={x}&y={y}&z={z}'
            })
        });
var format_2022_123_SFV_1 = new ol.format.GeoJSON();
var features_2022_123_SFV_1 = format_2022_123_SFV_1.readFeatures(json_2022_123_SFV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_123_SFV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_123_SFV_1.addFeatures(features_2022_123_SFV_1);
var lyr_2022_123_SFV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_123_SFV_1, 
                style: style_2022_123_SFV_1,
                interactive: true,
    title: '2022_12-3_SFV<br />\
    <img src="styles/legend/2022_123_SFV_1_0.png" /> 0.8 - 1.6<br />\
    <img src="styles/legend/2022_123_SFV_1_1.png" /> 1.6 - 2.4<br />\
    <img src="styles/legend/2022_123_SFV_1_2.png" /> 2.4 - 3.2<br />\
    <img src="styles/legend/2022_123_SFV_1_3.png" /> 3.2 - 4<br />\
    <img src="styles/legend/2022_123_SFV_1_4.png" /> 4 - 4.8<br />\
    <img src="styles/legend/2022_123_SFV_1_5.png" /> 4.8 - 5.6<br />\
    <img src="styles/legend/2022_123_SFV_1_6.png" /> 5.6 - 6.4<br />\
    <img src="styles/legend/2022_123_SFV_1_7.png" /> 6.4 - 7.2<br />\
    <img src="styles/legend/2022_123_SFV_1_8.png" /> 7.2 - 8<br />\
    <img src="styles/legend/2022_123_SFV_1_9.png" /> 8 - 8.8<br />'
        });
var format_2022_123_TD_2 = new ol.format.GeoJSON();
var features_2022_123_TD_2 = format_2022_123_TD_2.readFeatures(json_2022_123_TD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_123_TD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_123_TD_2.addFeatures(features_2022_123_TD_2);
var lyr_2022_123_TD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_123_TD_2, 
                style: style_2022_123_TD_2,
                interactive: true,
    title: '2022_12-3_TD<br />\
    <img src="styles/legend/2022_123_TD_2_0.png" /> 10 - 13<br />\
    <img src="styles/legend/2022_123_TD_2_1.png" /> 13 - 16<br />\
    <img src="styles/legend/2022_123_TD_2_2.png" /> 16 - 19<br />\
    <img src="styles/legend/2022_123_TD_2_3.png" /> 19 - 22<br />\
    <img src="styles/legend/2022_123_TD_2_4.png" /> 22 - 25<br />\
    <img src="styles/legend/2022_123_TD_2_5.png" /> 25 - 28<br />\
    <img src="styles/legend/2022_123_TD_2_6.png" /> 28 - 31<br />\
    <img src="styles/legend/2022_123_TD_2_7.png" /> 31 - 34<br />\
    <img src="styles/legend/2022_123_TD_2_8.png" /> 34 - 37<br />\
    <img src="styles/legend/2022_123_TD_2_9.png" /> 37 - 40<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_2022_123_SFV_1.setVisible(false);lyr_2022_123_TD_2.setVisible(false);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_2022_123_SFV_1,lyr_2022_123_TD_2];
lyr_2022_123_SFV_1.set('fieldAliases', {'ID': 'ID', 'longitude': 'longitude', 'latitude': 'latitude', 'TD': 'TD', 'SFV': 'SFV', 'FA': 'FA', 'N': 'N', });
lyr_2022_123_TD_2.set('fieldAliases', {'ID': 'ID', 'longitude': 'longitude', 'latitude': 'latitude', 'TD': 'TD', 'SFV': 'SFV', 'FA': 'FA', 'N': 'N', });
lyr_2022_123_SFV_1.set('fieldImages', {'ID': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'TD': 'TextEdit', 'SFV': 'TextEdit', 'FA': 'TextEdit', 'N': 'TextEdit', });
lyr_2022_123_TD_2.set('fieldImages', {'ID': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'TD': 'TextEdit', 'SFV': 'TextEdit', 'FA': 'TextEdit', 'N': 'TextEdit', });
lyr_2022_123_SFV_1.set('fieldLabels', {'ID': 'inline label', 'longitude': 'inline label', 'latitude': 'inline label', 'TD': 'inline label', 'SFV': 'inline label', 'FA': 'inline label', 'N': 'inline label', });
lyr_2022_123_TD_2.set('fieldLabels', {'ID': 'inline label', 'longitude': 'inline label', 'latitude': 'inline label', 'TD': 'inline label', 'SFV': 'inline label', 'FA': 'inline label', 'N': 'inline label', });
lyr_2022_123_TD_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});