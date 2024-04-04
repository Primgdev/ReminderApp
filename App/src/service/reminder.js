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
