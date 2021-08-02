import React from "react";
import MainLayout from "../../components/layout";
import axios from "axios";
import Image from "next/image";

interface RecipeInterface {
  title: string;
  servings: string;
  cookingTime: number;
  description: string;
}
const Recipe = ({ recipe }: { recipe: RecipeInterface}) => {
  return (
    <MainLayout>
      <div className="yellow_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>{recipe?.title || 'recipe'}</h2>
                <p style={{color: '#fff', fontSize: '14px', fontWeight: 500}}>
                  Cook and enjoy it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container pb-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about_box mb-4">
                <div className='d-flex justify-content-between align-items-center'>
                  <h3>Servings: {recipe.servings}</h3>
                  <h3>Cooking Time: {recipe.cookingTime}</h3>
                </div>
                <p>{recipe.description}</p>
              </div>
              <div className="about_box">
                <p>{recipe.description}</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 about_img_boxpdnt">
              <div className="about_img">
                <figure>
                  <Image src="/images/chef.jpg" alt="chef" width={548} height={389} layout='responsive'/>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recipe;

export const getServerSideProps = async (context: { params: { id: string } }) => {
  const response = await axios.get(`http://localhost:3001/api/recipe/${context.params.id}`);
  return {
    props: {
      recipe: response.data
    }
  }
}
