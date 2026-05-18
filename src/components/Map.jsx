import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useTheme } from "../context/ThemeContext";
import PropTypes from "prop-types";

export function Map({ center = [-58.5556154, -34.5178229], zoom = 16 }) {
	const mapContainerRef = useRef(null);
	const mapRef = useRef(null);
	const markerRef = useRef(null);
	const { isDarkTheme } = useTheme();

	// Dynamically select map tile style based on theme
	const mapStyle = isDarkTheme
		? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
		: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

	useEffect(() => {
		// Initialize the MapLibre GL map instance
		const map = new maplibregl.Map({
			container: mapContainerRef.current,
			style: mapStyle,
			center: center,
			zoom: zoom,
			attributionControl: true,
		});

		mapRef.current = map;

		// Add navigation controls (zoom and compass)
		map.addControl(new maplibregl.NavigationControl(), "top-right");

		const style = document.createElement("style");
		style.innerHTML = `
			.maplibregl-popup-content {
				border-radius: 12px !important;
				padding: 12px 16px !important;
				box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
				border: 1px solid #e2e8f0;
			}
			.dark .maplibregl-popup-content {
				background-color: #1e293b !important;
				color: #ffffff !important;
				border: 1px solid #334155;
			}
		`;
		document.head.appendChild(style);

		const popup = new maplibregl.Popup({ offset: 35, closeButton: false }).setHTML(
			`<div class="map-popup-inner" style="font-family: 'Inter', sans-serif; max-width: 220px;">
				<h4 style="font-weight: 700; margin: 0 0 4px 0; color: #024ad8; font-size: 14px;">Alloatti SRL</h4>
				<p style="font-size: 11px; color: #64748b; margin: 0; line-height: 1.4; font-weight: 500;">
					Ing. Luis Silveyra 1139,<br/>
					B1607BQC Villa Adelina,<br/>
					Provincia de Buenos Aires
				</p>
			 </div>`
		);

		// Use premium built-in vector marker with brand color
		const marker = new maplibregl.Marker({ color: "#024ad8" })
			.setLngLat(center)
			.setPopup(popup)
			.addTo(map);

		markerRef.current = marker;

		// Automatically show the popup marker info
		const popupTimeout = setTimeout(() => {
			if (mapRef.current && marker) {
				marker.togglePopup();
			}
		}, 600);

		return () => {
			clearTimeout(popupTimeout);
			map.remove();
			style.remove();
		};
	}, []);

	// Handle dynamic theme changes (Dark Mode vs Light Mode)
	useEffect(() => {
		if (mapRef.current) {
			mapRef.current.setStyle(mapStyle);
		}
	}, [isDarkTheme, mapStyle]);

	return (
		<div className="relative w-full h-full rounded-[16px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
			<div ref={mapContainerRef} className="w-full h-full min-h-[350px] md:min-h-[420px]" />
		</div>
	);
}

Map.propTypes = {
	center: PropTypes.arrayOf(PropTypes.number),
	zoom: PropTypes.number,
};
