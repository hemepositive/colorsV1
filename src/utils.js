export const colors = [
  "aqua",
  "black",
  "blue",
  "fuscia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "yellow"
  // "white"
];

export const hexes = [
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
  "#FFFFFF"
];

export const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Aqua
// #00FFFF

// black
// #000000

// blue
// #0000FF

// fuchsia
// #FF00FF

// gray
// #808080

// green
// #008000

// lime
// #00FF00

// maroon
// #800000

// navy
// #000080

// Olive
// #808000

// Purple
// #800080

// Red
// #FF0000

// silver
// #C0C0C0

// teal
// #008080
// white
// #FFFFFF

// yellow
// #FFFF00
