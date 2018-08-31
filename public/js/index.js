$("#signup").on("submit", function (e) {
  e.preventDefault();

  var username = $("#signupUserValidation").val().trim();
  var password = $("#signupPwValidation").val().trim();
  var email = $("#emailValidation").val().trim();
  var location = $("#locationValidation").val().trim();
  var car = $("#carValidation").val().trim();

  var newUser = {
    username: username,
    password: password,
    email: email,
    location: location,
    car: car
  };

  $.post("/signup", newUser).then(console.log).catch(console.error);
});

$("#signin").on("submit", function(e) {
  e.preventDefault();

  var username = $("#signinUserValidation").val().trim();
  var password = $("#signinPwValidation").val().trim();

  var user = {
    email: email,
    password: password
  };

  $.post('/signin', user).then(console.log).catch(console.error);
})