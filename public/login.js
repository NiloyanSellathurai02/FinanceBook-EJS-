const loginBtn = document.getElementById("login-btn");

const getLoginCredentials = async (event, target) => {
  try {
    event.preventDefault(); // Prevent the page from reloading;
    const form1Data = new FormData(event.target);
    const formDataAsObject = Object.fromEntries(form1Data.entries());
    console.log(formDataAsObject);
    return await api("POST", "/auth/login", formDataAsObject);
  } catch (error) {
    console.log(error);
  }
};
