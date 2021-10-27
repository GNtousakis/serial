var debug = process['env']['DEBUG'];

module.exports = { 
  dec: (str) => {
    let obj;
    obj = eval('('+ str + ')');
    if (debug === true) {
      console.log(check);
    }
    return obj;
  }
}
