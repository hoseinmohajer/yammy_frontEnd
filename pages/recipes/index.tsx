import React from "react";
import MainLayout from "../../components/layout";
import Categories from "../../components/categories";
import Link from "next/link";
import axios from "axios";

interface DataInterface {_id: string; title: string; description: string; servings: string; cookingTime: string;};
const Recipes = ({ data, loading = true }: {data: DataInterface[], loading: boolean}) => {
  return (
    <MainLayout>
      <div className='pt-5'>
        <Categories titleLess/>
      </div>
      <div className="about">
        <div className="container">
          <div className="row mb-3">
          {!loading && data && data.map((recipe: DataInterface) => {
            return(
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3" key={recipe._id}>
                <div className="about_box">
                  <h3>{recipe.title}</h3>
                  <div className='mt-2 d-flex justify-content-between align-items-center'>
                    <span>Servings: {recipe.servings}</span>
                    <span>Time: {recipe.cookingTime}</span>
                  </div>
                  <p>{recipe.description}</p>
                  <Link href={`/anotherRecipes/${recipe._id}`}>
                    <a href="#">
                      Read More <i className="fa fa-long-arrow-right" aria-hidden="true"/>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recipes;

export async function getServerSideProps() {
  const response = await axios.get(`http://localhost:3001/api/recipe`);
  return {
    props: {
      data: response.data,
      loading: false
    }
  }
}
