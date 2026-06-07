import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Custom hook to fetch and poll the official USD/ARS exchange rate from DolarAPI.
 * Provides support for manual override, status checking, and automatic polling.
 */
export function useDolarApi() {
	const [searchParams] = useSearchParams();

	// Helper to extract initial values from URL to prevent sync issues on mount
	const getInitialRate = () => {
		const exchangeParam = searchParams.get("tc");
		if (exchangeParam) {
			const parsedEx = parseFloat(exchangeParam);
			if (!isNaN(parsedEx)) return parsedEx;
		}
		return 985;
	};

	const getInitialManual = () => {
		const exchangeParam = searchParams.get("tc");
		if (exchangeParam) {
			const parsedEx = parseFloat(exchangeParam);
			return !isNaN(parsedEx);
		}
		return false;
	};

	const [bnaExchangeRate, setBnaExchangeRate] = useState(getInitialRate);
	const [isManualExchangeRate, setIsManualExchangeRate] = useState(getInitialManual);
	const [apiLoading, setApiLoading] = useState(true);
	const [apiFailed, setApiFailed] = useState(false);

	// Ref to prevent stale closures in the polling interval
	const manualRef = useRef(isManualExchangeRate);
	useEffect(() => {
		manualRef.current = isManualExchangeRate;
	}, [isManualExchangeRate]);

	const fetchExchangeRate = async (forceManualCheck = false) => {
		setApiLoading(true);
		try {
			const res = await fetch("https://dolarapi.com/v1/dolares");
			if (!res.ok) throw new Error("Network response was not ok");
			const data = await res.json();
			
			// Find BNA official rate (casa === "oficial")
			const oficialRate = Array.isArray(data) 
				? data.find(d => d.casa === "oficial") 
				: null;

			if (oficialRate && oficialRate.venta) {
				const currentManual = manualRef.current;
				if (!currentManual || forceManualCheck) {
					setBnaExchangeRate(oficialRate.venta);
					setIsManualExchangeRate(false);
				}
				setApiFailed(false);
				return oficialRate.venta;
			} else {
				throw new Error("Invalid data format");
			}
		} catch (error) {
			console.error("Error fetching exchange rate from DolarAPI:", error);
			setApiFailed(true);
			throw error;
		} finally {
			setApiLoading(false);
		}
	};

	useEffect(() => {
		fetchExchangeRate();
		
		// Setup interval to poll every 2 minutes (120,000 ms)
		const interval = setInterval(fetchExchangeRate, 120000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		bnaExchangeRate,
		setBnaExchangeRate,
		isManualExchangeRate,
		setIsManualExchangeRate,
		apiLoading,
		apiFailed,
		fetchExchangeRate
	};
}
