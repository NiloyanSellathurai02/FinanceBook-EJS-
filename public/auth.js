// Front-end JS code for authentication

const getSignUpDetails = async (event, target) => {
  try {
    event.preventDefault(); // Prevent the page from reloading;
    const formData = new FormData(event.target);
    const formDataAsObject = Object.fromEntries(formData.entries());
    await api("POST", "/auth/signup", formDataAsObject);

    // const getPasswordDouble = document.getElementById(
    //   "signUpasswordValidation"
    // ).value;
    // getUserName = document.getElementById("signUpUserName").value;
    // getpassWord = document.getElementById("signUpassword").value;
    // console.log(getUserName, getpassWord);
    // if (getpassWord === getPasswordDouble) {
    //   console.log(getUserName, getpassWord);
    // } else {
    //   signUpUserName.style.border = "3px solid red";
    //   signUpassword.style.border = "3px solid red";
    //   passwordValidation.style.border = "3px solid red";
    // }
    // const loggingIn = new XMLHttpRequest();
    // loggingIn.open("POST", "http://localhost:7000/signup");
    // loggingIn.setRequestHeader("Content-Type", "application/json");

    // loggingIn.send(
    //   JSON.stringify({ name: getUserName, password: getpassWord })
    // );
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////
/////////////////////////// //Login /////////////////////////////////
/////////////////////////////////////////////////////////////////////
