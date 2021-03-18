// Code your solution here

function findMatching(drivers, name) {
  const ans = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  if (ans.length < 0) { return []; }
  return ans;
}

function fuzzyMatch(drivers, string) {
  const ans = drivers.filter(driver => driver.slice(0, string.length) === string);
  return ans;
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}
