export async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`http://localhost:5010/api/${endpoint}`, {
      mode: "cors",
      method: "POST",
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
