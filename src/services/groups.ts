import axios from "axios";

const host =
  "https://collectiontrackerapi.lat/collectives" ||
  "http://localhost:8080/collectives";

export async function getGroups() {
  const options = {
    method: "GET",
    url: `${host}/groups`,
  };

  try {
    const response = await axios.request(options);
    return { success: true, data: response.data };
  } catch (e: any) {
    return {
      success: false,
      details: e.response.data.error.message,
    };
  }
}
