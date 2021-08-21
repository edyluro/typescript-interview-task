import getUser from "~/services/getUser";

//TODO: implement token validation
export const isLoggedIn = async () => {
  const user = await getUser();
  return !!user;
};
