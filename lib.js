function avg(numbers) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    s += numbers[i];
  }
  return s / numbers.length;
}

function prime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i < num; i = i + 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function fact(num) {
  if (num === 0) {
    return 1;
  }
  let facto = 1;
  for (let i = 1; i < num + 1; i++) {
    facto *= i;
  }
  return facto;
}

module.exports = {
  avg,
  prime,
  fact,
};
