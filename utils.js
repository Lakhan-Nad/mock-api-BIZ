function parseIntOrDefault(x, def) {
  let p = Number.parseInt(x);
  if (Number.isNaN(p)) {
    return def;
  }
  return p;
}

function rangeInt(x, min, max) {
  return x < min ? min : x > max ? max : x;
}

function getOrderBy(orderBy) {
  if (!Number.isNaN(Number(orderBy))) {
    return Number(orderBy) < 0 ? -1 : 1;
  }
  if (
    typeof orderBy === "string" &&
    (orderBy.toLowerCase() === "desc" || orderBy.toLowerCase() === "descending")
  ) {
    return -1;
  }
  return 1;
}

module.exports = {
  parseIntOrDefault,
  rangeInt,
  getOrderBy,
};
