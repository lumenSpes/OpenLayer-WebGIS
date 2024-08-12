window.onload = init;

function init() {
    const vectorLayer = new ol.layer.Vector({
        background: "#1a2b39",
        source: new ol.source.Vector({
            url: "https://openlayers.org/data/vector/ecoregions.json",
            format: new ol.format.GeoJSON(),
        }),
        style: {
            "fill-color": ["string", ["get", "COLOR"], "#eee"],
        },
    });

    const map = new ol.Map({
        layers: [vectorLayer],
        target: "map",
        view: new ol.View({
            center: [0, 0],
            zoom: 1,
        }),
    });

    const featureOverlay = new ol.layer.Vector({
        source: new ol.source.Vector(),
        map: map,
        style: {
            "stroke-color": "rgba(255, 255, 255, 0.7)",
            "stroke-width": 2,
        },
    });

    let highlight;
    const displayFeatureInfo = function (pixel) {
        const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
            return feature;
        });

        const info = document.getElementById("info");
        if (feature) {
            info.innerHTML = feature.get("ECO_NAME") || "&nbsp;";
        } else {
            info.innerHTML = "&nbsp;";
        }

        if (feature !== highlight) {
            if (highlight) {
                featureOverlay.getSource().removeFeature(highlight);
            }
            if (feature) {
                featureOverlay.getSource().addFeature(feature);
            }
            highlight = feature;
        }
    };

    map.on("pointermove", function (evt) {
        if (evt.dragging) {
            return;
        }
        const pixel = map.getEventPixel(evt.originalEvent);
        displayFeatureInfo(pixel);
    });

    map.on("click", function (evt) {
        displayFeatureInfo(evt.pixel);
    });
}
