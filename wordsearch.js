const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log("horizontal", horizontalJoin);
  for (let element of horizontalJoin) {
    if (element.includes(word))
      return true;
  }

  for (let j = 0; j < letters.length; j++) {
    const verticalArray = [];
    //console.log("horizontal array:", horizontalArray);
    //console.log("letters[j]", letters[j]);
    for (let i = 0; i < letters.length; i++) {
      //console.log("letters[j][i]", letters[i][j])
      if (letters[i][j]) {
        verticalArray.push(letters[i][j]);
      }
    }
    const lettersVertical = verticalArray.join('');
    if (lettersVertical.includes(word)) {
      return true;
    }
    //console.log("vertical Array", lettersVertical);
  }
  //If the loop closed and True was not not return;
  return false; //It means the element was not found in the Array
};

//worked on this paired programming with @mary-a1 and @ashakyassin
