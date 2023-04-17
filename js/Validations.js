class Validations {

  validId(id) {
    const pattern = /^[0-9]{8}$/;
    return pattern.test(id);
  }

  validName(name) {
    const pattern = /^[A-Za-z\s]+$/g;
    return pattern.test(name);
  }
  
  validPhone(phone) {
    const pattern = /^01[0-9]{9}$/;
    return pattern.test(phone);
  }

  validGPA(gpa) {
    return gpa >= 0 && gpa <= 4;
  }
  
}
