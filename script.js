let choices = [
  { name: " ", bgColor: "#fec89a" },
  { name: "ðŧ Personal", bgColor: "#FA7070" },
  { name: "ðŦ School", bgColor: "#FBF2CF" },
  { name: "ð Study", bgColor: "#C6EBC5" },
  { name: "ðĪŠ Fun", bgColor: "#A1C298" },
  { name: "ðĪ Sleep", bgColor: "#76a5af" },
  { name: "ð ïļ Work", bgColor: "gray" },
  { name: "ðð― Exercise", bgColor: "white" },
];

const selectButtonListener = (event) => {
  event.target.style.backgroundColor = choices[event.target.value].bgColor;
};
