$(document).ready(function() {
    $('#password').on('input', function() {
      var password = $(this).val();
      var passwordLength = password.length;
      var passwordStrength = 0;
  
      if (passwordLength < 8) {
        passwordStrength = 0;
      } else if (passwordLength === 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        passwordStrength = 1;
      } else if (passwordLength > 20 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        passwordStrength = 3;
      } else {
        passwordStrength = 0;
      }
  
      $('#vol').val(passwordStrength);
      updatePasswordStrengthText(passwordStrength);
    });
  
    function updatePasswordStrengthText(strength) {
      var strengthText = '';
      if (strength === 0) {
        strengthText = 'Força: Fraca';
      } else if (strength === 1) {
        strengthText = 'Força: Média';
      } else if (strength === 3) {
        strengthText = 'Força: Forte';
      } else {
        strengthText = 'Força: Fraca';
      }
      $('#password-strength').text(strengthText);
    }
  });
  