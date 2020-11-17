export default {
  getFavorite: async () => {
    const response = await fetch(
      "https://server-giphy.herokuapp.com/user/favorites",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
      }
    );
    if (response.status !== 401) {
      return await response.json();
    } else
      return {
        message: { msgBody: "UnAuthorized", msgError: true },
      };
  },
  postFavorite: async (favorite) => {
    const response = await fetch(
      "https://server-giphy.herokuapp.com/user/favorite",
      {
        method: "post",
        body: JSON.stringify(favorite),
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
      }
    );
    if (response.status !== 401) {
      return await response.json();
    } else
      return {
        message: { msgBody: "UnAuthorized", msgError: true },
      };
  },
  delete: async (url) => {
    const response = await fetch(
      "https://server-giphy.herokuapp.com/user/delete",
      {
        method: "post",
        body: JSON.stringify(url),
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
      }
    );
    return await response.json();
  },
};
