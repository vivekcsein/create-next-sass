import { endpoint_rootLayout } from "../utils/endpoints";

const fetchAPI = async (endpoint: string) => {
  try {
    let res = await fetch(`${endpoint}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      // mode: 'cors',
      credentials: "same-origin",
    });
    return res.json();
  } catch (err) {
    console.error(err + "Failed to fetch data");
  }
};

export const getRootLayoutAPI = async () => {
  const data = await fetchAPI(endpoint_rootLayout);
  return data.rootLayoutData;
};
