import axios from "axios";
import { Skip } from "../../types/skip";

const BASE_URL = "https://app.wewantwaste.co.uk/api";

export const fetchSkipsByLocation = async (
  postcode: string = "NR32",
  area: string = "Lowestoft"
): Promise<Skip[]> => {
  try {
    const response = await axios.get<Skip[]>(`${BASE_URL}/skips/by-location`, {
      params: { postcode, area },
    });

    return processSkipData(response.data);
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw new Error("Failed to load skip options");
  }
};

const processSkipData = (data: Skip[]): Skip[] => {
  return data.map((skip) => {
    let totalPrice = skip.price_before_vat;

    if (skip.price_before_vat === null && skip.transport_cost) {
      totalPrice = skip.transport_cost;
    }

    const vatAmount = totalPrice ? totalPrice * (skip.vat / 100) : 0;
    const totalWithVat = totalPrice ? totalPrice + vatAmount : null;

    return {
      ...skip,
      total_price: totalWithVat ? parseFloat(totalWithVat.toFixed(2)) : null,
    };
  });
};
