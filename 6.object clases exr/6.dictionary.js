function dictionary(args) {
  let arrDic = [];
  for (let i of args) {
    let current = JSON.parse(i);
    let key = Object.keys(current);
    let value = Object.values(current);
    let valueStr = value[0];
    let keyStr = key[0];

    let item = arrDic.find(m => m.hasOwnProperty(keyStr));

    if (item) {
      item[keyStr] = valueStr;
    } else {
      arrDic.push(current);
    }
  }

  let sortArr = arrDic.map(item => Object.entries(item));
  sortArr.sort((a, b) => a[0][0].localeCompare(b[0][0]));

  let objDic = {};
  sortArr.forEach(el => {
    let term = el[0][0];
    let definition = el[0][1];

    objDic[term] = definition;
  });

  for (let i of sortArr) {
    console.log(`Term: ${i[0][0]} => Definition: ${i[0][1]}`);
  }
  //   console.log(objDic);
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Coffee":"A hot drink "}'
]);
