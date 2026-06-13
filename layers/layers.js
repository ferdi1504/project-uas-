ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_aksesibilitas_univunion_2 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_2 = format_aksesibilitas_univunion_2.readFeatures(json_aksesibilitas_univunion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_2.addFeatures(features_aksesibilitas_univunion_2);
var lyr_aksesibilitas_univunion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_2, 
                style: style_aksesibilitas_univunion_2,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_2_0.png" /> <br />\
    <img src="styles/legend/aksesibilitas_univunion_2_1.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_2_2.png" /> 2,4km (30 menit)<br />' });
var format_univ_surabaya_3 = new ol.format.GeoJSON();
var features_univ_surabaya_3 = format_univ_surabaya_3.readFeatures(json_univ_surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_univ_surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_3.addFeatures(features_univ_surabaya_3);
var lyr_univ_surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_3, 
                style: style_univ_surabaya_3,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_3_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/univ_surabaya_3_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/univ_surabaya_3_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_3_3.png" /> UNAIR A<br />\
    <img src="styles/legend/univ_surabaya_3_4.png" /> UNAIR B<br />\
    <img src="styles/legend/univ_surabaya_3_5.png" /> UNAIR C<br />\
    <img src="styles/legend/univ_surabaya_3_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/univ_surabaya_3_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/univ_surabaya_3_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/univ_surabaya_3_9.png" /> <br />' });
var format_PTNDISURABAYA_4 = new ol.format.GeoJSON();
var features_PTNDISURABAYA_4 = format_PTNDISURABAYA_4.readFeatures(json_PTNDISURABAYA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNDISURABAYA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNDISURABAYA_4.addFeatures(features_PTNDISURABAYA_4);
var lyr_PTNDISURABAYA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNDISURABAYA_4, 
                style: style_PTNDISURABAYA_4,
                popuplayertitle: 'PTN DI SURABAYA',
                interactive: true,
    title: 'PTN DI SURABAYA<br />\
    <img src="styles/legend/PTNDISURABAYA_4_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNDISURABAYA_4_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNDISURABAYA_4_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNDISURABAYA_4_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNDISURABAYA_4_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNDISURABAYA_4_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNDISURABAYA_4_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNDISURABAYA_4_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNDISURABAYA_4_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNDISURABAYA_4_9.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_aksesibilitas_univunion_2.setVisible(true);lyr_univ_surabaya_3.setVisible(true);lyr_PTNDISURABAYA_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Positron_1,lyr_aksesibilitas_univunion_2,lyr_univ_surabaya_3,lyr_PTNDISURABAYA_4];
lyr_aksesibilitas_univunion_2.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNDISURABAYA_4.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Ranking ': 'Ranking ', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', 'foto': 'foto', });
lyr_aksesibilitas_univunion_2.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNDISURABAYA_4.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Ranking ': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', 'foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_2.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_univ_surabaya_3.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'header label - visible with data', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNDISURABAYA_4.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Ranking ': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', 'foto': 'no label', });
lyr_PTNDISURABAYA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});