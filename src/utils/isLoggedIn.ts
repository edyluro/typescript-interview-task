import getUser from "~/services/getUser";

export const isLoggedIn = async () => {
  const user = await getUser();
  return !!user;
};
