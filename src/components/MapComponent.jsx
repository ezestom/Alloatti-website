import { useEffect } from "react";
import L from "leaflet";

const MapComponent = () => {
	// Coordenadas de "Luis Silveyra 1139, B1607BQC Villa Adelina, Provincia de Buenos Aires"
	const locationCoordinates = [-34.534321, -58.518657];

	useEffect(() => {
		// Crear el mapa y establecer la vista inicial
		const map = L.map("map").setView(locationCoordinates, 16); // Agregar la capa de tiles de OpenStreetMap

		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 25,
			attribution: "© OpenStreetMap",
		}).addTo(map); // Agregar un marcador en la ubicación específica

		L.marker(locationCoordinates).addTo(map); // Agregar un círculo en la zona de Villa Adelina

		L.circle(locationCoordinates, {
			color: "red",
			fillColor: "#f03",
			fillOpacity: 0.1,
			radius: 100, // Radio del círculo en metros
		}).addTo(map); // Limpieza cuando el componente se desmonta

		return () => {
			map.remove();
		};
	}, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

	return (
		<div
			id="map"
			style={{
				minHeight: "290px",
				minWidth: "400px",
				borderRadius: "8px",
			}}></div>
	);
};

export default MapComponent;
