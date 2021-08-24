import { registerBlockType } from "@wordpress/blocks";

registerBlockType("devnel/recipe-prototype", {
  title: "Recipe Block Prototype",
  icon: "carrot",
  category: "widgets",
  edit: () => <div>Hola, mundo!</div>,
  save: () => <div>Hola, mundo!</div>,
});
