const maComing = () => {
  alert("Hello, I am coming!");
};

const askPicnic = () => {
  const response = confirm("Are you going to the picnic?");
  console.log(response);
  if (response) {
    alert("Great! Let's go!");
  } else {
    alert("Too bad!");
  }
};
const askName = () => {
    const name = prompt("What is your name?");
    console.log(name);
    alert(`Hello, ${name}!`);
    if (name === "") {
      alert("You didn't enter your name!");
    }else {
        alert("Nice to meet you!");
    }
}
