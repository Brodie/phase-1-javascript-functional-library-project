function myEach(coll, callback) {
  if (Array.isArray(coll)) {
    let collCopy = [...coll];
    collCopy.forEach(callback);
    return coll;
  } else {
    let collCopy = [...Object.values(coll)];
    collCopy.forEach(callback);
    return coll;
  }
}

function myMap(coll, callback) {
  if (Array.isArray(coll)) {
    let collCopy = [...coll];
    return collCopy.map(callback);
  } else {
    let collCopy = [...Object.values(coll)];
    return collCopy.map(callback);
  }
}

function myReduce(coll, callback, acc) {
  if (Array.isArray(coll)) {
    if (typeof acc === "undefined") {
      let collCopy = [...coll];
      return collCopy.reduce(callback);
    } else {
      let collCopy = [...coll];
      return collCopy.reduce(callback, acc);
    }
  } else {
    if (typeof acc === "undefined") {
      let collCopy = [...Object.values(coll)];
      return collCopy.reduce(callback);
    } else {
      let collCopy = [...Object.values(coll)];
      return collCopy.reduce(callback, acc);
    }
  }
}

function myFind(coll, pred) {
  return coll.find(pred);
}

function myFilter(coll, pred) {
  if (Array.isArray(coll)) {
    return coll.filter(pred);
  } else {
    return Object.values(coll).filter(pred);
  }
}

function mySize(coll) {
  if (Array.isArray(coll)) {
    return coll.length;
  } else {
    return Object.values(coll).length;
  }
}

function myFirst(arr, n) {
  if (typeof n === "undefined") {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
}

function myLast(arr, n) {
  if (typeof n === "undefined") {
    return arr[arr.length - 1];
  } else {
    return arr.slice(arr.length - n);
  }
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}
