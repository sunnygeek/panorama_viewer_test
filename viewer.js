pannellum.viewer('panorama', {
    type: "equirectangular",
    panorama: "https://cdn.eso.org/images/large/ESO_Paranal_360_Marcio_Cabral_Chile_13-CC.jpg",  // Change to a supported format
    autoLoad: true,
    autoRotate: 2,
    compass: true,
    hotSpotDebug: false,
    controls: {
        mouseZoom: true,
        pan: true,
        zoom: true
    }
});
