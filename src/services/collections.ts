import axios from "axios";

const host = process.env.BACKEND_API || "http://localhost:8080/collectives";

export async function addCollection(form: any) {
  const options = {
    method: "POST",
    url: `${host}`,
    data: {
      ...form,
      value: Number(form.value),
    },
  };

  try {
    const response = await axios.request(options);
    return { success: true, details: response.data };
  } catch (e: any) {
    return {
      success: false,
      details: e.response.data.error.message,
    };
  }
}
