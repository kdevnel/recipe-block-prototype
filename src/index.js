import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import attributes from "./attributes";
import "./index.scss";

registerBlockType("devnel/recipe-prototype", {
  apiVersion: 2,
  title: "Recipe Block Prototype",
  icon: "carrot",
  category: "widgets",
  attributes,
  example: {
    attributes: {
      title: "Magic Bean Soup",
      description: "A recipe that uses the fabled Magic Beans",
      ingredients: [
        __("Flour", "devnel-recipe-prototype"),
        __("Magic Beans", "devnel-recipe-prototype"),
        __("Water", "devnel-recipe-prototype"),
        "💖",
      ],
      method: [
        __("Mix", "devnel-recipe-prototype"),
        __("Bake", "devnel-recipe-prototype"),
        __("Enjoy", "devnel-recipe-prototype"),
      ],
    },
  },
  edit: editComponent,
  save: saveComponent,
});

function editComponent(props) {
  const {
    // makes it easier to reference attributes
    attributes: { recipeId },
    setAttributes,
    className,
  } = props;
  const blockProps = useBlockProps();

  const onChangeRecipe = (e) => {
    setAttributes({ recipeId: e.target.value });
  };

  // select all the recipes on the site so we can use them
  const allRecipes = useSelect((select) => {
    return select("core").getEntityRecords("postType", "family_recipe_book", {
      per_page: -1,
    });
  });

  console.log(allRecipes);

  // stop running further until there are recipes
  if (allRecipes == undefined) return <p>Loading recipes...</p>;

  return (
    <div {...blockProps}>
      <div className="recipe-select-container">
        <select onChange={onChangeRecipe}>
          <option value="">{"Select a recipe"}</option>
          {allRecipes.map((recipe) => {
            return (
              <option value={recipe.id} selected={recipeId == recipe.id}>
                {recipe.title.rendered}
              </option>
            );
          })}
        </select>
      </div>
      <div>The HTML preview of our recipe</div>
    </div>
  );
}

function saveComponent(props) {
  const {
    attributes: { title, description, ingredients, method },
    className,
  } = props;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <RichText.Content tagName="h2" value={title} />
      <RichText.Content tagName="p" value={description} />
      <h3>{__("Ingredients", "devnel-recipe-prototype")}</h3>
      <RichText.Content
        tagName="ul"
        className="ingredients"
        value={ingredients}
      />
      <h3>{__("Method", "devnel-recipe-prototype")}</h3>
      <RichText.Content tagName="ol" className="method" value={method} />
    </div>
  );
}
