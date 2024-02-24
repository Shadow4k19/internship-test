class User {
  static instance = null;
  constructor() {
    if (User.instance) {
      throw new Error("Only one of User is allowed");
    }
    this.setUserFromStorage();
    User.instance = this;
  }
  setUserFromStorage() {
    this.setUsername(localStorage.getItem("username"));
  }
  setUsername(username) {
    localStorage.setItem("username", username);
  }
  getUsername() {
    return localStorage.getItem("username");
  }
  deleteUser() {
    localStorage.removeItem("username");
  }
}
const userInstance = new User();

export default userInstance;
