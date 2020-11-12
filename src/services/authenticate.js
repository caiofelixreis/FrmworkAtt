import database from "../database.json";

const authenticate = ({ email, password }) => {
  const { users } = database;

  const User = users.find((user) => user.email === email);

  if (!User) {
    return { message: "Usuário não encontrado", success: false };
  }

  if (User.password !== password) {
    return { message: "Senha incorreta", success: false };
  }

  localStorage.setItem("token", User.id);
  return { message: "Bem vindo", success: true };
};

export default authenticate;
