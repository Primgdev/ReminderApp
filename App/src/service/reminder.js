import http from "../utils/http";

export const getReminders = async () => {
  try {
    // const response = await http.get("/reminder/get-reminder");
    // console.log('response', response);

    // if (response.status === 200) {
    //   return response.data;
    // } else {
    //   throw new Error("Fetch Failed");
    // }

    const response = await fetch("http://localhost:6000/api/reminders/get-reminder");
    if (!response.ok) {
      throw new Error("Failed to fetch reminders");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed" + error.message);
  }
};
