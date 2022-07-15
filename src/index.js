module.exports = function towelSort (matrix = []) {
  const array = [];

  matrix.forEach((e, i) => {
    if (i % 2 !== 0) {
      e.reverse();
    } 
    array.push(...e);
  });

  return array;
};