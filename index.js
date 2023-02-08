function arraysCAndD(arrayA, arrayB) {
  const setB = new Set(arrayB);
  const arrayC = [];
  const arrayD = [];

  for (const value of arrayA) {
    if (!setB.has(value)) {
      arrayC.push(value);
    } else {
      arrayD.push(value);
      setB.delete(value);
    }
  }

  for (const value of arrayB) {
    if (setB.has(value)) {
      arrayD.push(value);
    }
  }

  return { arrayC, arrayD };
}