export const fetchPopulationByCountryYear = (country, year) => {
  return $.ajax({
    url: `https://api.census.gov/data/timeseries/idb/5year?get=NAME,POP,MPOP100_,FPOP100_,MPOP95_99,FPOP95_99,MPOP90_94,FPOP90_94,MPOP85_89,FPOP85_89,MPOP80_84,FPOP80_84,MPOP75_79,FPOP75_79,MPOP70_74,FPOP70_74,MPOP65_69,FPOP65_69,MPOP60_64,FPOP60_64,MPOP55_59,FPOP55_59,MPOP50_54,FPOP50_54,MPOP45_49,FPOP45_49,MPOP40_44,FPOP40_44,MPOP35_39,FPOP35_39,MPOP30_34,FPOP30_34,MPOP25_29,FPOP25_29,MPOP20_24,FPOP20_24,MPOP15_19,FPOP15_19,MPOP10_14,FPOP10_14,MPOP5_9,FPOP5_9,MPOP0_4,FPOP0_4&FIPS=${country}&time=${year}&key=29a9186a8a57902ea485ec032f0eb48139514485`,
    success: res => {
      console.log(res[1][45]);
      console.log(res);
    },
    error: res => {console.log(res);},

  });
};
