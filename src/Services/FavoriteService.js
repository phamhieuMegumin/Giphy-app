export default {
  getFavorite: async () => {
    const response = await fetch("/user/favorites");
    if (response.status !== 401) {
      return await response.json();
    } else
      return {
        message: { msgBody: "UnAuthorized", msgError: true },
      };
  },
  postFavorite: async (favorite) => {
    const response = await fetch("/user/favorite", {
      method: "post",
      body: JSON.stringify(favorite),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 401) {
      return await response.json();
    } else
      return {
        message: { msgBody: "UnAuthorized", msgError: true },
      };
  },
};
