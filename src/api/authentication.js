export async function login(username, password) {
  try {
    const res = await fetch("https://localhost:7095/api/Authentication/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    throw error;
  }
}
