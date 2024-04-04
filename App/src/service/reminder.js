import http from "../utils/http";

export const getReminders = async () => {
  try {
    const response = await http.get("/reminder/get-reminder");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Fetch Failed");
    }
  } catch (error) {
    console.error("Fetch failed" + error.message);
  }
};

export const postReminders = async (message) => {
  try {
    const response = await http.post("/reminder/post-reminder", { message });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Fetch Failed");
    }
  } catch (error) {
    console.error("Fetch failed" + error.message);
  }
};
