let choices = [
  { name: " ", bgColor: "#fec89a" },
  { name: "💻 Personal", bgColor: "#FA7070" },
  { name: "🏫 School", bgColor: "#FBF2CF" },
  { name: "📚 Study", bgColor: "#C6EBC5" },
  { name: "🤪 Fun", bgColor: "#A1C298" },
  { name: "💤 Sleep", bgColor: "#76a5af" },
  { name: "🛠️ Work", bgColor: "gray" },
  { name: "🏊🏽 Exercise", bgColor: "white" },
];

const selectButtonListener = (event) => {
  event.target.style.backgroundColor = choices[event.target.value].bgColor;
};
