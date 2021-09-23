const {
  randomFirstName,
  randomLastName,
  randomNumber,
  randomDepartment,
  randomTime,
  randomBoolean,
  randomGender,
  randomMobileNo,
} = require("./random");

function getRandomData() {
  let startTime, endTime;
  startTime = randomTime();
  endTime = randomTime(startTime, null, 15 * 60 * 1000);
  if (endTime.getTime() - startTime.getTime() < 10 * 60 * 1000) {
    endTime = new Date(startTime.getTime() + 10 * 60 * 1000);
  }
  while (startTime.getDate() !== endTime.getDate()) {
    startTime = randomTime();
    endTime = randomTime(startTime, null, 15 * 60 * 1000);
    if (endTime.getTime() - startTime.getTime() < 10 * 60 * 1000) {
      endTime = new Date(startTime.getTime() + 10 * 60 * 1000);
    }
  }
  let id = `Patient${randomNumber(1, 1000)}`;
  let firstName = randomFirstName();
  let lastName = randomLastName();
  let patient = {
    firstName,
    lastName,
    age: randomNumber(10, 80),
    gender: randomGender(),
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@mail.com`,
    phone: randomMobileNo(),
  };
  let doctor = {
    firstName: randomFirstName(),
    lastName: randomLastName(),
    department: randomDepartment(),
  };
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
    if (Math.random() < 0.2) {
      let obj = getRandomData();
      datas.push(obj);
      datas.push(obj);
    } else {
      datas.push(getRandomData());
    }
  }
  return datas;
}

const data = getDatas(10000);

module.exports = {
  data,
  maxCount: data.length,
};
