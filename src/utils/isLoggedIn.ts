import getUser from "~/services/getUser";

//TODO: implement token validation
const isLoggedIn = async () => {
  const user = await getUser();
  return !!user;
};

export default isLoggedIn;
