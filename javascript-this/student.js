/* exported student */
var student = {
  firstName: 'Chris',
  lastName: 'Gitmed',
  subject: 'JavaScript',

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },

  getIntroduction() {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
