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

  console.log(resPojo);
  return resPojo;
};

const group85plus = (pojo) => {
  const keys = Object.keys(pojo);
  const resPojo = Object.assign(pojo);

  const FPOP85_ =
      resPojo['FPOP85_89'] +
      resPojo['FPOP90_94'] +
      resPojo['FPOP95_99'] +
      resPojo['FPOP100_'];

  const MPOP85_ =
      resPojo['MPOP85_89'] +
      resPojo['MPOP90_94'] +
      resPojo['MPOP95_99'] +
      resPojo['MPOP100_'];

  const TPOP85_ = FPOP85_ + MPOP85_;

  const FPOP85_p = parseFloat((
      resPojo['FPOP85_89p'] +
      resPojo['FPOP90_94p'] +
      resPojo['FPOP95_99p'] +
      resPojo['FPOP100_p']
    ).toFixed(3));

  const MPOP85_p = parseFloat((
      resPojo['MPOP85_89p'] +
      resPojo['MPOP90_94p'] +
      resPojo['MPOP95_99p'] +
      resPojo['MPOP100_p']
    ).toFixed(3));

  const TPOP85_p = FPOP85_p + MPOP85_p;


  resPojo['FPOP85_'] = FPOP85_;
  resPojo['FPOP85_p'] = FPOP85_p;
  resPojo['MPOP85_'] = MPOP85_;
  resPojo['MPOP85_p'] = MPOP85_p;
  resPojo['TPOP85_'] = TPOP85_;
  resPojo['TPOP85_p'] = TPOP85_p;

  const toDelete = [
    'FPOP85_89',
    'FPOP90_94',
    'FPOP95_99',
    'FPOP100_',

    'MPOP85_89',
    'MPOP90_94',
    'MPOP95_99',
    'MPOP100_',

    'FPOP85_89p',
    'FPOP90_94p',
    'FPOP95_99p',
    'FPOP100_p',

    'MPOP85_89p',
    'MPOP90_94p',
    'MPOP95_99p',
    'MPOP100_p',

    'TPOP85_89',
    'TPOP90_94',
    'TPOP95_99',
    'TPOP100_',

    'TPOP85_89p',
    'TPOP90_94p',
    'TPOP95_99p',
    'TPOP100_p'
  ];


  for (var i = 0; i < toDelete.length; i++) {
    delete resPojo[`${toDelete[i]}`];
  }
  // delete resPojo['FPOP85_89'];
  // delete resPojo['FPOP90_94'];
  // delete resPojo['FPOP95_99'];
  // delete resPojo['FPOP100_'];
  //
  // delete resPojo['MPOP85_89'];
  // delete resPojo['MPOP90_94'];
  // delete resPojo['MPOP95_99'];
  // delete resPojo['MPOP100_'];
  //
  // delete resPojo['FPOP85_89p'];
  // delete resPojo['FPOP90_94p'];
  // delete resPojo['FPOP95_99p'];
  // delete resPojo['FPOP100_p'];
  //
  // delete resPojo['MPOP85_89p'];
  // delete resPojo['MPOP90_94p'];
  // delete resPojo['MPOP95_99p'];
  // delete resPojo['MPOP100_p'];

  return resPojo;
};

export default (arr) => {
  // return calcPercent(
  //     addTotalPopAge(
  //       convertArrToPojo(arr)
  //     )
  // );

  return group85plus(
    calcPercent(
      addTotalPopAge(
        convertArrToPojo(arr)
      )
    )
  );
};
