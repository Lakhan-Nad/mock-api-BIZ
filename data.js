const {
  randomFirstName,
  randomLastName,
  randomNumber,
  randomDate,
  randomDepartment,
  randomTime,
  randomBoolean,
} = require("./random");

function getRandomData() {
  let id = `Patient${randomNumber(1, 1000)}`;
  let patient = {
    firstName: randomFirstName(),
    lastName: randomLastName(),
    age: randomNumber(10, 80),
  };
  let doctor = {
    firstName: randomFirstName(),
    lastName: randomLastName(),
    department: randomDepartment(),
  };
  let date = randomDate();
  let startTime = randomTime();
  let endTime = randomTime(null, startTime);
  let status = randomBoolean() ? "active" : "inactive";
  return {
    id,
    patient,
    doctor,
    date,
    startTime,
    endTime,
    status,
  };
}

function getDatas(cnt) {
  let datas = [];
  for (let i = 0; i < cnt; i++) {
    datas.push(getRandomData());
  }
  return datas;
}

const data = getDatas(100);

module.exports = {
  data,
  maxCount: data.length,
};
