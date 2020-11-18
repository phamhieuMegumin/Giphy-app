import Cookie from "js-cookie";
export default {
  login: async (user) => {
    const response = await fetch(
      "https://server-giphy.herokuapp.com/user/login",
      {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 401) {
      const data = await response.json();
      localStorage.setItem("auth_token", data.token);
      return data;
    } else {
      const message = {
        isAuthenticated: false,
        user: {
          username: "",
          role: "",
        },
        message: {
          msgBody: "username or password is wrong",
          msgError: true,
        },
      };
      return message;
    }
  },
  register: async (user) => {
    const response = await fetch(
      "https://server-giphy.herokuapp.com/user/register",
      {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  },
  logout: async () => {
    const response = await fetch(
      "https://server-giphy.herokuapp.com/user/logout",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
      }
    );
    return await response.json();
  },
  isAuthenticated: async () => {
    const response = await fetch(
      "https://server-giphy.herokuapp.com/user/authenticated",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
      }
    );
    if (response.status !== 401) {
      console.log(response.status);
      //passport middleware auto send status 401 when authenticated
      return await response.json();
    } else return { isAuthenticated: false, user: { username: "", role: "" } };
  },
};
