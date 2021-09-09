const express = require("express");
const cors = require("cors");
const app = express();
const { data, maxCount } = require("./data");
const { parseIntOrDefault, rangeInt, getOrderBy } = require("./utils");

app.use(cors());
app.use(express.json());


app.post("/", (req, res) => {
  let { page, limit, orderBy } = req.query;
  limit = rangeInt(parseIntOrDefault(limit, 20), 1, maxCount);
  page = rangeInt(parseIntOrDefault(page, 1), 1, Math.ceil(maxCount / limit));
  orderBy = getOrderBy(orderBy);
  let startIndex = (page - 1) * limit;
  let endIndex = startIndex + limit;
  if (orderBy < 0) {
    data.reverse();
  }
  res.json({
    data: data.slice(startIndex, endIndex),
    hasMore: endIndex < maxCount,
    orderBy: orderBy === 1 ? "ASC" : "DESC",
    page,
    limit,
  });
  if (orderBy < 0) {
    data.reverse();
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
