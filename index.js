module.exports = { 
  dec: (str) => {
    let obj;
    obj = eval('('+ str + ')');
    return obj;
  }
}
