const validateSignUp = (values) => {
  const errors = {};
  const nameRegex = /^[A-Za-z]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const emailRegex =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

  if (!values.firstName) {
    errors.firstName = "First Name is required!";
  } else if (!nameRegex.test(values.firstName)) {
    errors.firstName = "First Name should only contain letters!";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required!";
  } else if (!nameRegex.test(values.lastName)) {
    errors.lastName = "Last Name should only contain letters!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Please enter valid email address";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Password must contain minimum 8 characters, that includes at least one letter, one number and one special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password does not match";
  }
  return errors;
};
export default validateSignUp;
