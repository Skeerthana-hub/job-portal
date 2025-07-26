export const useAuth = () => {
  return localStorage.getItem("isAdmin") === "true";
};

export const loginAdmin = () => {
  localStorage.setItem("isAdmin", "true");
};

export const logoutAdmin = () => {
  localStorage.removeItem("isAdmin");
};
