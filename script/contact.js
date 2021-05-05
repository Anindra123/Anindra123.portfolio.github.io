const App = () => {
  const name_feild = document.querySelector("#name");
  const email_feild = document.querySelector("#email");
  const message = document.querySelector("#message");
  const error_message = (msg, className) => {
    document.querySelector(`${className} .err-text`).innerHTML = msg;
    document.querySelector(`${className}`).classList.add("exclamation");
    document.querySelector(`${className}`).classList.remove("check-box");
  };
  const correct = (className) => {
    document.querySelector(`${className} .err-text`).innerHTML = "";
    document.querySelector(`${className}`).classList.add("check-box");
    document.querySelector(`${className}`).classList.remove("exclamation");
  };
  const checkName = () => {
    if (name_feild.value.length === 0) {
      name_feild.style.border = "solid 2px #FF3333";
      error_message("Required *", ".name-container");
    } else if (name_feild.value.length > 40) {
      name_feild.style.border = "solid 2px #FF3333";
      error_message(
        "Name cannot be greater than 40 characters",
        ".name-container"
      );
    } else {
      name_feild.style.border = "solid 2px #66FF66";
      correct(".name-container");
    }
  };

  const checkEmail = () => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email_feild.value.match(re)) {
      email_feild.style.border = "solid 2px #FF3333";
      error_message("Not valid email address", ".email-container");
    } else if (email_feild.value.length === 0) {
      email_feild.style.border = "solid 2px #FF3333";
      error_message("Required *", ".email-container");
    } else {
      email_feild.style.border = "solid 2px #66FF66";

      correct(".email-container");
    }
  };
  name_feild.addEventListener("input", checkName);
  email_feild.addEventListener("input", checkEmail);
};

App();
