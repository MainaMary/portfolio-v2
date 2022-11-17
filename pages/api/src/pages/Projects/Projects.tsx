import React from "react";
import CustomProject from "../../components/CustomProject";
import Cart from "../../../../../public/assets/ShoppingCart.png";
import Price from "../../../../../public/assets/priceSetter.png";
import Title from "../../components/Title";
const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <div id="projects">
        <CustomProject
          title="Recipe app"
          content="A recipe app that allows users to search for thousands of recipes by serach query and ingredients.A user can also get a meal planner"
          demoLink="https"
          githubLink="https"
          image={Cart}
        />
        <CustomProject
          title="Recipe app"
          content="A recipe app that allows users to search for thousands of recipes by serach query and ingredients.A user can also get a meal planner"
          demoLink="https"
          githubLink="https://github.com/MainaMary/pricing-form"
          image={Price}
        />
        <CustomProject
          title="Recipe app"
          content="A recipe app that allows users to search for thousands of recipes by serach query and ingredients.A user can also get a meal planner"
          demoLink="https"
          githubLink="https://github.com/MainaMary/shopping-cart"
          image={Cart}
        />
      </div>
    </>
  );
};

export default Projects;
