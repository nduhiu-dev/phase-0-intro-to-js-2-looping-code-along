// Code your solutions in this file
// 1. WriteCards function
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// 2. CountDown function
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
