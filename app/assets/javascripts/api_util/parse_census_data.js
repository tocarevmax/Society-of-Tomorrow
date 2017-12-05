const convertArrToPojo = (arr) => {
  const pojo = {};

  for (var i = 0; i < arr[0].length; i++) {
    if ((arr[0][i].slice(1,4) === 'POP') ||
        (arr[0][i] === 'POP')) {
      pojo[arr[0][i]] = Number(arr[1][i]);
    } else {
      pojo[arr[0][i]] = arr[1][i];
    }
  }

  console.log(pojo);
  return pojo;
};

const addTotalPopAge = (pojo) => {
  const keys = Object.keys(pojo);
  const resPojo = Object.assign(pojo);

  for (var i = 0; i < keys.length; i++) {
    if (keys[i].slice(1,4) === 'POP') {
      if (keys[i][0] === 'F') {
        let postfix = keys[i].slice(1);
        let maleNum = resPojo[`M${keys[i].slice(1)}`];
        let femaleNum = resPojo[keys[i]];
        resPojo[`T${postfix}`] = maleNum + femaleNum;
      }
    }
  }

  return resPojo;
};

const calcPercent = (pojo) => {
  const keys = Object.keys(pojo);
  const resPojo = Object.assign(pojo);

  for (var i = 0; i < keys.length; i++) {
    if (keys[i].slice(1,4) === 'POP') {
      resPojo[`${keys[i]}p`] = parseFloat(
        ((resPojo[keys[i]] / resPojo['POP']) * 100).toFixed(3)
      );
    }
  }

  return resPojo;
};

export default (arr) => {
  return calcPercent(
    addTotalPopAge(
      convertArrToPojo(arr)
    )
  );
};
