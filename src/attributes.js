const attributes = {
  title: {
    type: "array",
    source: "children",
    selector: "h2",
  },
  description: {
    type: "array",
    source: "children",
    selector: "p",
  },
  ingredients: {
    type: "array",
    source: "children",
    selector: ".ingredients",
  },
  method: {
    type: "array",
    source: "children",
    selector: ".method",
  },
};

export default attributes;
