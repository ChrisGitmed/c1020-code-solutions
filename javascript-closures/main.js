/* ES5
function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}
*/

const graduate = credential => {
  return fullName => fullName + ', ' + credential;
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Christopher Gitmed');
lawSchool('Christopher Gitmed');
