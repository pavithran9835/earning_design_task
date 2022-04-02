// 1)

let data = "C1e7h3P4k11";

let splitted = data.match(/[a-z]+|[^a-z]+/gi);

for (let i = 0; i < splitted.length; i++) {
  if (isNaN(splitted[i])) {
    let output = "";
    output += splitted[i].repeat(splitted[i + 1]);
    console.log(output);
  }
}

// 2)

const rates = [
  {
    from: "1",
    to: "400",
    commision: "5",
  },
  {
    from: "401",
    to: "800",
    commision: "4",
  },
  {
    from: "801",
    to: "1200",
    commision: "3",
  },
  {
    from: "1201",
    to: "9000",
    commision: "2",
  },
  {
    from: "9001",
    to: "15000",
    commision: "1",
  },
];

function calculateCommission(value, charge) {
  let charges = charge.filter((a, b) => a.from < value && a.to > value);
  let commission = charges[0].commision;
  let result = (value / 100) * commission;
  let remainig = value - result;

  console.log(
    `Your commission rate is ${commission}% you will get $${result} and remaining amount is $${remainig}`
  );
}

calculateCommission(12452, rates);

// 3)

let str = "virat sachin dhoni virat rahul virat rahul sachin",
  split = str.split(" "),
  obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}

console.log(obj);
