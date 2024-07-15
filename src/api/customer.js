export async function fetchCustomerData(token) {
  try {
    console.log(token);
    const res = await fetch("https://localhost:7095/api/Customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch customer data");
    }
  } catch (error) {
    throw error;
  }
}
