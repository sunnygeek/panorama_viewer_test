pannellum.viewer('panorama', {
    type: "equirectangular", // The current image specified below is compatible with this type.
    panorama: "https://cdn.eso.org/images/large/ESO_Paranal_360_Marcio_Cabral_Chile_13-CC.jpg",  // Can be a local image or a URL.
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
