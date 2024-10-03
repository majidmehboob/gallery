export default async function registerUser(data) {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000" // Development API URL (localhost)
        : "https://gallery-roan-tau.vercel.app"; // Production API URL (your Vercel deployment)

    const response = await fetch(`${baseUrl}/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log("ERROR", error);
  }
}
