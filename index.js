
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`
}

// 2. Build a function `nowServing`. This function should return the first person
// in line and then remove that individual from the line. If there is nobody in line,
// it should return "There is nobody waiting to be served!"

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return katzDeliLine.shift()
  }
}
