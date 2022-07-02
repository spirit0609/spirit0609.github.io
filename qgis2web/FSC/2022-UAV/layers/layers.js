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
var lyr_20220610_110612_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-06-10_11-06-12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220610_110612_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [14935358.331736, 4233897.093427, 14935404.393181, 4233966.792496]
                            })
                        });
var lyr_20220620_093141_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-06-20_09-31-41",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220620_093141_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [14935358.346652, 4233897.091376, 14935404.383607, 4233966.782923]
                            })
                        });
var lyr_20220701_083133_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-07-01_08-31-33",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220701_083133_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [14935358.339973, 4233897.086999, 14935404.384164, 4233966.792633]
                            })
                        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_20220610_110612_1.setVisible(true);lyr_20220620_093141_2.setVisible(false);lyr_20220701_083133_3.setVisible(false);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_20220610_110612_1,lyr_20220620_093141_2,lyr_20220701_083133_3];
