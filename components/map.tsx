const Map = () => {
  return (
    <div className="map-container w-full rounded-3xl overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="https://snazzymaps.com/embed/653569"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
