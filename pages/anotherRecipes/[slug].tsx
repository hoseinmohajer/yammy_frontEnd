import React from "react";
import axios from "axios";
import MainLayout from "../../components/layout";
import Image from "next/image";

interface RecipeInterface {
  title: string;
  servings: string;
  cookingTime: number;
  description: string;
}
const Recipe = ({ recipe }: { recipe: RecipeInterface}) => {
  const _recipe: any = recipe;
  const theRecipe = JSON.parse(_recipe);
  return (
    <MainLayout>
      <div className="yellow_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>{theRecipe?.title || 'recipe'}</h2>
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
                  <h3>Servings: {theRecipe.servings}</h3>
                  <h3>Cooking Time: {theRecipe.cookingTime}</h3>
                </div>
                <p>{theRecipe.description}</p>
              </div>
              <div className="about_box">
                <p>{theRecipe.description}</p>
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


export async function getStaticPaths() {
  const res = await axios.get(`http://localhost:3001/api/recipe`);
  const recipes = await res.data;
  const paths = recipes.map((recipe: {_id: string}) => ({
    params: { slug: recipe._id },
  }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await axios.get(`http://localhost:3001/api/recipe/${params.slug}`);
  const recipe = await JSON.stringify(res.data);
  return {
    props: {
      recipe,
    },
  }
}
