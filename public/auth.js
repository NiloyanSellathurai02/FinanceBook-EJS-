// Front-end JS code for authentication
const getUserName = document.getElementById("signUpUserName");
const getpassWord = document.getElementById("signUpassword");
const getpassWordValidation = document.getElementById(
  "signUpasswordValidation"
);
const getSignUpDetails = async (event, target) => {
  try {
    event.preventDefault(); // Prevent the page from reloading;
    const formData = new FormData(event.target);
    const formDataAsObject = Object.fromEntries(formData.entries());
    if (formDataAsObject.password === formDataAsObject.password2) {
      console.log(formDataAsObject);
      await api("POST", "/auth/signup", formDataAsObject);
    } else if (
      formDataAsObject === "" ||
      formDataAsObject.password !== formDataAsObject.password2
    ) {
      getUserName.style.border = "3px solid red";
      getpassWord.style.border = "3px solid red";
      getpassWordValidation.style.border = "3px solid red";
    }
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////
////////////////////////////// Login /////////////////////////////////
/////////////////////////////////////////////////////////////////////
