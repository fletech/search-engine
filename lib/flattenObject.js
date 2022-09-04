export const flattenObject = (object, callback, headings) => {
  let toReturn = {};

  for (let i in object) {
    if (!object.hasOwnProperty(i)) continue;

    if (typeof object[i] == "object") {
      let flatObject = flattenObject(object[i]);
      for (let x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = object[i];
    }
  }
  if (callback) {
    callback(toReturn, headings);
    return toReturn;
  }

  return toReturn;
};

export const flat_hardware = (object) => {
  let toReturn = { id: object.id };

  //   for (let i in object) {
  //     if (!object.hasOwnProperty(i)) continue;

  //     if (typeof object[i] == "object") {
  //       let flatObject = flattenObject(object[i]);
  //       for (let x in flatObject) {
  //         if (!flatObject.hasOwnProperty(x)) continue;

  //         toReturn[x] = flatObject[x];
  //       }
  //     } else {
  //       toReturn[i] = object[i];
  //     }
  //   }
  //   if (callback) {
  //     callback(toReturn, headings);
  //     return toReturn;
  //   }

  return toReturn;
};
