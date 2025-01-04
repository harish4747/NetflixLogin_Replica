let user_input = document.getElementsByClassName("input");
let iterator = 0;
let copyuserdetails = [];
let userdetails = [
  {
    email: "Sample@gmail.com",
    mobileno: 9876543210,
    password: "sample@9876",
  },
];

function validateUserInput(input) {
  if (
    (input.includes("@") && input.includes(".com") && !input.includes(" ")) ||
    (parseInt(input) > 999999999 && parseInt(input) < 10000000000)
  ) {
    user_input[0].id = "error_negative";
  } else {
    user_input[0].id = "error_positive";
    document.getElementById("username_error").style.display = "block";
  }
}

function validateUserPassword(password) {
  if (password.length > 3 && password.length < 61) {
    user_input[1].id = "error_negative";
  } else {
    user_input[1].id = "error_positive";
    document.getElementById("password_error").style.display = "block";
  }
}

document.getElementById("username").onfocus = () => {
  user_input[0].id = "error";
  document.getElementById("username_error").style.display = "none";
};

document.getElementById("userpassword").onfocus = () => {
  user_input[1].id = "error";
  document.getElementById("password_error").style.display = "none";
};

document.getElementById("learnmore").onclick = () => {
  document.getElementById("learnmore").style.display = "none";
  document.getElementById("forfinal_policy").style.display = "block";
};

document.getElementById("signincode").onclick = () => {
  if (iterator % 2 == 0) {
    user_input[1].style.display = "none";
    user_input[1].id = "error";
    user_input[0].id = "error";
    document.getElementById("username_error").style.display = "none";
    document.getElementById("password_inactive").style.display = "block";
    document.getElementById("signin").innerText = "Send sign-in code";
    document.getElementById("signincode").innerText = "Use Password";
    document.getElementById("forgotlink").innerText =
      "Forgot email or phone number?";
    document.getElementById("password_error").style.display = "none";
  } else {
    user_input[1].style.display = "block";
    user_input[1].id = "error";
    user_input[0].id = "error";
    document.getElementById("wrongpass_err_msg").style.display = "none";
    document.getElementById("username_error").style.display = "none";
    document.getElementById("password_inactive").style.display = "none";
    document.getElementById("signin").innerText = "Sign in";
    document.getElementById("signincode").innerText = "Use a sign-in code";
    document.getElementById("forgotlink").innerText = "Forgot password?";
  }
  iterator++;
};

document.getElementById("signin").onclick = () => {
  let $username = document.getElementById("username").value;
  let $userpassword = document.getElementById("userpassword").value;

  if ($username == "" && $userpassword == "" && iterator % 2 == 0) {
    user_input[0].id = "error_positive";
    user_input[1].id = "error_positive";
    document.getElementById("username_error").style.display = "block";
    document.getElementById("password_error").style.display = "block";
  } else if ($username == "" && iterator % 2 == 0) {
    user_input[0].id = "error_positive";
    document.getElementById("username_error").style.display = "block";
  } else if ($userpassword == "" && iterator % 2 == 0) {
    user_input[1].id = "error_positive";
    document.getElementById("password_error").style.display = "block";
  } else {
    userdetails.map((user) => {
      if (user.email === $username || user.password === $username) {
        if (user.password == $userpassword) {
          location.href = "https://www.netflix.com/login";
          alert("something went wrong");
        } else {
          document.getElementById("wrongpass_err_msg").style.display = "block";
          document.getElementById("uname_err").innerText += ` ${$username}`;
        }
      }
    });
  }
};

document.getElementById("username").addEventListener("blur", (event) => {
  validateUserInput(document.getElementById("username").value);
});
document.getElementById("userpassword").addEventListener("blur", (event) => {
  validateUserPassword(document.getElementById("userpassword").value);
});
