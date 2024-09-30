const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/authentication/register`,
    {
      method: "POST",
      credentials: "include", // This ensures cookies are sent with the request
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convert the form data to JSON
    }
  );

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message); // Throw an error if the response is not ok
  }
};

export const signout = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/authentication/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error during sign out.");
  }
};

export const signin = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/authentication/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/authentication/validate-token`,
    {
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Token invalid");
  }
  return response.json();
};
