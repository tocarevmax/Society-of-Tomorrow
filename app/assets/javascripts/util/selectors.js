export const extractGender = (pojo, mf) => {
  const keys = Object.keys(pojo);
  const resArr = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
  const indecing = [
    `${mf}POP85_`,
    `${mf}POP80_84`,
    `${mf}POP75_79`,
    `${mf}POP70_74`,
    `${mf}POP65_69`,
    `${mf}POP60_64`,
    `${mf}POP55_59`,
    `${mf}POP50_54`,
    `${mf}POP45_49`,
    `${mf}POP40_44`,
    `${mf}POP35_39`,
    `${mf}POP30_34`,
    `${mf}POP25_29`,
    `${mf}POP20_24`,
    `${mf}POP15_19`,
    `${mf}POP10_14`,
    `${mf}POP5_9`,
    `${mf}POP0_4`
  ];
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].slice(0,4) === `${mf}POP`) {
      if (keys[i][keys[i].length-1] !== 'p') {
        let idx = indecing.indexOf(keys[i]);
        resArr[idx]['age'] = keys[i].slice(4);

        resArr[idx]['num'] = pojo[keys[i]];

        resArr[idx]['tpop'] = pojo['POP'];

        let tpop = `TPOP${keys[i].slice(4)}`;
        resArr[idx]['numBoth'] = pojo[tpop];
        resArr[idx]['pctBoth'] = pojo[`${tpop}p`];
      } else {
        let idx = indecing.indexOf(keys[i].slice(0,keys[i].length-1));
        resArr[idx]['pct'] = pojo[keys[i]];
      }
    }
  }
  return resArr;
};
