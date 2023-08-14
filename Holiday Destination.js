//Alert to introduce the concept of the programme
alert(
  "Unsure of where to go on holiday this year? Let this quiz help you to decide!"
);

//Quiz questions using let and prompt

//MAKE BELOW FUNCTION??
let name = prompt("What's your name?");
let environment = prompt("Do you prefer the beach or the city?");
let length = prompt("Do prefer a short break or a long vacation?");
let weather = prompt("Do you prefer the sunshine or the snow?");
let budget = prompt("What is your budget to the nearest £100?");

//If else statements consider all possible variations within the responses and provides an output in the consle log for each set of possible responses
function checkCondition() {
  if (
    environment === "beach" &&
    length === "short break" &&
    weather === "sunshine"
  ) {
    console.log(`Try Barcelona ☀️  ${name}`);
  } else if (
    environment === "beach" &&
    length === "short break" &&
    weather === "snow"
  ) {
    console.log(`Try Copenhagan Christmas Markets 🎄 ${name}`);
  } else if (
    environment === "beach" &&
    length === "long vacation" &&
    weather === "sunshine"
  ) {
    console.log(`Try the Bahamas 😎 ${name}`);
  } else if (
    environment === "beach" &&
    length === "long vacation" &&
    weather === "snow"
  ) {
    console.log(`Try a Canadian Roadtrip 🚗 ${name}`);
  } else if (
    environment === "city" &&
    length === "short break" &&
    weather === "sunshine"
  ) {
    console.log(`Try Rome 🌞 ${name}`);
  } else if (
    environment === "city" &&
    length === "short break" &&
    weather === "snow"
  ) {
    console.log(`Try Stockholm 🏙️ ${name}`);
  } else if (
    environment === "city" &&
    length === "long vacation" &&
    weather === "sunshine"
  ) {
    console.log(`Try Cancun 🏖️ ${name}`);
  } else if (
    environment === "city" &&
    length === "long vacation" &&
    weather === "snow"
  ) {
    console.log(`Try Helsinki ❄️ ${name}`);
  }
}

checkCondition();

if (budget <= 500) {
  console.log("Use a budget travel agent, like Tui or Jet2");
} else {
  console.log(
    "There are lots of luxury travel agents that will help you plan your trip, such as Kuoni"
  );
}