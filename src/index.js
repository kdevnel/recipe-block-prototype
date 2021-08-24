import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import attributes from "./attributes";

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
  edit: (props) => {
    const {
      // makes it easier to reference attributes
      attributes: { title, description, ingredients, method },
      setAttributes,
      className,
    } = props;
    const blockProps = useBlockProps();
    const onChangeTitle = (newValue) => {
      setAttributes({ title: newValue });
    };
    const onChangeDescription = (newValue) => {
      setAttributes({ description: newValue });
    };
    const onChangeIngredients = (newValue) => {
      setAttributes({ ingredients: newValue });
    };
    const onChangeMethod = (newValue) => {
      setAttributes({ method: newValue });
    };

    return (
      <div {...blockProps}>
        <RichText
          placeholder={__("Add Recipe Title", "devnel-recipe-prototype")}
          tagName="h2"
          onChange={onChangeTitle}
          value={title}
        />
        <RichText
          placeholder={__("Add recipe description", "devnel-recipe-prototype")}
          tagName="p"
          onChange={onChangeDescription}
          value={description}
        />
        <h3>{__("Ingredients", "devnel-recipe-prototype")}</h3>
        <RichText
          tagName="ul"
          multiline="li"
          placeholder={__("Add ingredients", "devnel-recipe-prototype")}
          value={ingredients}
          onChange={onChangeIngredients}
          className="ingredients"
        />
        <h3>{__("Method", "devnel-recipe-prototype")}</h3>
        <RichText
          tagName="ol"
          multiline="li"
          placeholder={__("Add method steps", "devnel-recipe-prototype")}
          value={method}
          onChange={onChangeMethod}
          className="method"
        />
      </div>
    );
  },
  save: (props) => {
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
  },
});
