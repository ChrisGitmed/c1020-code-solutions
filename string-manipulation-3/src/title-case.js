/* eslint-disable no-unused-vars */
function titleCase(string) {
  var colonIsFound = false;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ':') {
      colonIsFound = true;
    }
  }
  if (colonIsFound) {
    var fullTitleArray = string.split(':');
    var titleArray = fullTitleArray[0].split(' ');
    var subtitleArray = fullTitleArray[1].split(' ');
  } else {
    titleArray = string.split(' ');
  }

  var revisedTitle = '';
  for (i = 0; i < titleArray.length; i++) {
    if (titleArray[i].toLowerCase() === 'javascript') {
      if (i === titleArray.length - 1) {
        revisedTitle += 'JavaScript';
      } else {
        revisedTitle += 'JavaScript ';
      }
    } else if (titleArray[i] === 'in' || titleArray[i] === 'for' || titleArray[i] === 'of' || titleArray[i] === 'the') {
      revisedTitle += titleArray[i] + ' ';
    } else if (titleArray[i] === 'api') {
      revisedTitle += 'API';
    } else {
      for (var c = 0; c < titleArray[i].length; c++) {
        if (c === 0) {
          revisedTitle += titleArray[i][c].toUpperCase();
        } else {
          revisedTitle += titleArray[i][c];
        }
      }
      if (i !== titleArray.length - 1) {
        revisedTitle += ' ';
      }
    }
  }

  if (subtitleArray !== undefined) {
    var revisedSubtitle = '';
    for (i = 0; i < subtitleArray.length; i++) {
      if (subtitleArray[i] === 'for') {
        revisedSubtitle += subtitleArray[i];
      } else {
        for (c = 0; c < subtitleArray[i].length; c++) {
          if (c === 0) {
            revisedSubtitle += subtitleArray[i][c].toUpperCase();
          } else if (subtitleArray[i][c] === '-') {
            revisedSubtitle += '-' + subtitleArray[i][c + 1].toUpperCase();
            c++;
          } else {
            revisedSubtitle += subtitleArray[i][c];
          }
        }
      }
      if (i !== subtitleArray.length - 1) {
        revisedSubtitle += ' ';
      }
    }
    var fullRevisedTitle = revisedTitle + ':' + revisedSubtitle;
    return fullRevisedTitle;
  }

  return revisedTitle;
}
