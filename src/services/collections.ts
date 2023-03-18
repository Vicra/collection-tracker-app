import axios from "axios";

const host =
  "https://collectiontrackerapi.lat/collectives" ||
  "http://localhost:8080/collectives";

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
    return { success: true, data: response.data };
  } catch (e: any) {
    return {
      success: false,
      details: e.response.data.error.message,
    };
  }
}

export async function getCollections() {
  const options = {
    method: "GET",
    url: `${host}`,
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

export async function deleteCollection(name: String) {
  const options = {
    method: "DELETE",
    url: `${host}/${name}`,
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

export async function getCollectionByName(name: String) {
  const options = {
    method: "GET",
    url: `${host}/${name}`,
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

export async function updateCollection(form: any) {
  const options = {
    method: "PATCH",
    url: `${host}/${form.oldName}`,
    data: {
      name: form.name,
      value: Number(form.value),
      year: form.year,
      condition: form.condition,
      location: form.location,
      group: form.group,
    },
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
