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

function getEmail(firstName, lastName) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
}

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
  if (Math.random() < 0.2) {
    endTime = new Date(startTime.getTime() + 60 * 1000 * 60);
  }
  let id = `Patient${randomNumber(1, 1000)}`;
  let firstName = randomFirstName();
  let lastName = randomLastName();
  let customer = {
    firstName,
    lastName,
    gender: randomGender(),
    email: getEmail(firstName, lastName),
    phone: randomMobileNo(),
  };
  let userFirstName = randomFirstName();
  let userLastName = randomLastName();
  let user = {
    name: `${userFirstName} ${userLastName}`,
    department: randomDepartment(),
    email: getEmail(userFirstName, userLastName),
  };
  let status = randomBoolean() ? "active" : "inactive";
  return {
    id,
    customer,
    user,
    slot: {
      date: startTime.toISOString().split("T")[0],
      startTime: startTime.toISOString().split("T")[1],
      endTime: endTime.toISOString().split("T")[1],
    },
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

const maxCount = 100000;

module.exports = {
  data: getDatas(maxCount),
  maxCount,
};
