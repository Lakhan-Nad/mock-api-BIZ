const {
  randomFirstName,
  randomLastName,
  randomNumber,
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
  let startTime = randomTime();
  let endTime = randomTime(startTime, null, 10 * 60 * 60 * 1000);
  if (endTime.getTime() - startTime.getTime() < 15 * 60 * 1000) {
    endTime = new Date(startTime.getTime() + 15 * 60 * 1000);
  }
  let status = randomBoolean() ? "active" : "inactive";
  return {
    id,
    patient,
    doctor,
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

const data = getDatas(10000);

module.exports = {
  data,
  maxCount: data.length,
};
