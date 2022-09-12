export const USERLOGIN = "USERLOGIN";

export const authentificatioUser = (user, isAuthenticated) => {
  return {
    type: USERLOGIN,
    payload: { user: user, isAuthenticated: isAuthenticated },
  };
};
