// return random number between min and max
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFirstName() {
  let names = [
    "John",
    "Jane",
    "Mary",
    "Tom",
    "Jack",
    "Lucy",
    "Lily",
    "Bob",
    "Tom",
    "Jack",
    "Lucy",
    "Lily",
    "Bob",
  ];
  return names[randomNumber(0, names.length - 1)];
}

function randomLastName() {
  let names = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
    "Clark",
    "Rodriguez",
    "Lewis",
    "Lee",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "Hernandez",
    "King",
    "Wright",
    "Lopez",
    "Hill",
    "Scott",
    "Green",
    "Adams",
    "Baker",
    "Gonzalez",
    "Nelson",
    "Carter",
    "Mitchell",
    "Perez",
    "Roberts",
    "Turner",
    "Phillips",
    "Campbell",
    "Parker",
    "Evans",
    "Edwards",
    "Collins",
    "Stewart",
    "Sanchez",
    "Morris",
    "Rogers",
    "Reed",
    "Cook",
    "Morgan",
    "Bell",
    "Murphy",
    "Bailey",
    "Rivera",
    "Cooper",
    "Richardson",
    "Cox",
    "Howard",
    "Ward",
    "Torres",
    "Peterson",
    "Gray",
    "Ramirez",
    "James",
    "Watson",
    "Brooks",
    "Kelly",
    "Sanders",
    "Price",
    "Bennett",
    "Wood",
    "Barnes",
    "Ross",
    "Henderson",
    "Coleman",
    "Jenkins",
    "Perry",
    "Powell",
    "Long",
    "Patterson",
    "Hughes",
    "Flores",
    "Washington",
    "Butler",
    "Simmons",
    "Foster",
    "Gonzales",
    "Bryant",
    "Alexander",
    "Russell",
    "Griffin",
    "Diaz",
    "Hayes",
    "Myers",
    "Ford",
    "Hamilton",
    "Graham",
    "Sullivan",
    "Wallace",
    "Woods",
    "Cole",
    "West",
    "Jordan",
    "Owens",
    "Reynolds",
    "Fisher",
    "Ellis",
    "Harrison",
    "Gibson",
    "McDonald",
    "Cruz",
    "Marshall",
    "Ortiz",
    "Gomez",
    "Murray",
    "Freeman",
    "Wells",
    "Webb",
    "Simpson",
    "Stevens",
    "Tucker",
    "Porter",
    "Hunter",
    "Hicks",
    "Crawford",
    "Henry",
    "Boyd",
    "Mason",
    "Morales",
    "Kennedy",
    "Warren",
    "Dixon",
    "Ramos",
    "Reyes",
    "Burns",
    "Gordon",
    "Shaw",
    "Holmes",
    "Rice",
    "Robertson",
    "Hunt",
    "Black",
    "Daniels",
    "Palmer",
    "Mills",
    "Nichols",
    "Grant",
    "Knight",
    "Ferguson",
    "Rose",
    "Stone",
    "Hawkins",
    "Dunn",
    "Perkins",
    "Hudson",
    "Spencer",
    "Gardner",
    "Stephens",
    "Payne",
    "Pierce",
    "Berry",
    "Matthews",
    "Arnold",
    "Wagner",
    "Willis",
    "Ray",
    "Watkins",
    "Olson",
    "Carroll",
    "Duncan",
    "Snyder",
    "Hart",
    "Cunningham",
    "Bradley",
    "Lane",
    "Andrews",
    "Ruiz",
    "Harper",
    "Fox",
    "Riley",
    "Armstrong",
    "Carpenter",
    "Weaver",
    "Greene",
    "Lawrence",
    "Elliott",
    "Chavez",
    "Sims",
    "Austin",
    "Peters",
    "Kelley",
    "Franklin",
    "Lawson",
    "Fields",
    "Gutierrez",
    "Ryan",
    "Schmidt",
    "Carr",
    "Vasquez",
    "Castillo",
    "Wheeler",
    "Chapman",
    "Oliver",
    "Montgomery",
    "Richards",
    "Williamson",
    "Johnston",
    "Banks",
    "Meyer",
    "Bishop",
    "McCoy",
    "Howell",
    "Alvarez",
    "Morrison",
    "Hansen",
    "Fernandez",
    "Garza",
    "Harvey",
    "Little",
    "Burton",
    "Stanley",
    "Nguyen",
    "George",
    "Jacobs",
    "Reid",
    "Kim",
    "Fuller",
    "Lynch",
    "Dean",
    "Gilbert",
    "Garrett",
    "Romero",
    "Welch",
    "Larson",
    "Frazier",
    "Burke",
    "Hanson",
    "Day",
  ];
  return names[randomNumber(0, names.length - 1)];
}

// return random medical department
function randomDepartment() {
  let departments = [
    "Cardiology",
    "Allergy and immunology",
    "Anesthesiology",
    "Dermatology",
    "Diagnostic radiology",
    "Emergency medicine",
    "Family medicine",
    "Internal medicine",
    "Medical genetics",
    "Neurology",
    "Nuclear medicine",
    "Obstetrics and gynecology",
    "Ophthalmology",
    "Pathology",
    "Pediatrics",
    "Physical medicine and rehabilitation",
    "Preventive medicine",
    "Psychiatry",
    "Radiation oncology",
    "Surgery",
    "Urology",
  ];
  return departments[randomNumber(0, departments.length - 1)];
}

// return random date between after and before
function randomDate(after, before) {
  if (after === undefined || after === null) after = new Date(1970, 0, 1);
  if (before === undefined || before === null) before = new Date();
  var min = after.getTime(),
    max = before.getTime();
  var random = Math.random() * (max - min) + min;
  return new Date(random);
}

function randomTime(after, before, duration) {
  if (after === undefined || after === null) {
    if (
      before !== undefined &&
      before !== null &&
      duration !== undefined &&
      duration !== null
    )
      after = new Date(before.getTime() - duration);
    else after = new Date(new Date().getFullYear(), 0, 1);
  }
  if (before === undefined || before === null) {
    if (
      after !== undefined &&
      after !== null &&
      duration !== undefined &&
      duration !== null
    )
      before = new Date(after.getTime() + duration);
    else before = new Date();
  }
  var min = after.getTime(),
    max = before.getTime();
  var random = Math.random() * (max - min) + min;
  return new Date(random);
}

function randomBoolean() {
  return Math.random() > 0.5;
}

function randomGender() {
  let x = Math.random();
  if (x < 1 / 3) return "male";
  else if (x < 2 / 3) return "female";
  return "other";
}

function randomMobileNo() {
  let phone = "";
  phone += Number(randomNumber(7, 9)).toString();
  for (let x = 1; x <= 9; x++) {
    phone += Number(randomNumber(0, 9)).toString();
  }
  return phone;
}

module.exports = {
  randomNumber,
  randomFirstName,
  randomLastName,
  randomDepartment,
  randomDate,
  randomTime,
  randomBoolean,
  randomGender,
  randomMobileNo,
};
