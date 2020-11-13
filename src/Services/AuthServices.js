export default {
  login: async (user) => {
    const response = await fetch("/user/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 401) {
      return await response.json();
    } else {
      const message = {
        isAuthenticated: false,
        user: {
          username: "",
          role: "",
        },
      };
      return message;
    }
  },
  register: async (user) => {
    const response = await fetch("/user/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  },
  logout: async () => {
    const response = await fetch("/user/logout");
    return await response.json();
  },
  isAuthenticated: async () => {
    const response = await fetch("/user/authenticated");
    if (response.status !== 401) {
      //passport middleware auto send status 401 when authenticated
      return await response.json();
    } else return { isAuthenticated: false, user: { username: "", role: "" } };
  },
};
