//headers
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json; charset=utf-8");
// myHeaders.append("Authorization", "SECRET");

export const postImageAPI = async (endpoint: string, imgdata: string) => {
  //formdata
  const formData = new FormData();
  formData.append("image", imgdata);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: myHeaders,
      body: formData,
    });

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
