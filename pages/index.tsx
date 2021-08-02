import React, {useEffect} from 'react';
import MainLayout from "../components/layout";
import {useDispatch, useSelector} from 'react-redux';
import {autoCompleteActionCreator} from "../redux/slices/feeds";
import Categories from "../components/categories";
import Slider from "../components/mainPage/slider";
import Blog from "../components/mainPage/blog";
import AboutFoods from "../components/mainPage/aboutFoods";
import Client from "../components/mainPage/client";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  useEffect(() => {
    dispatch(autoCompleteActionCreator({q: 'chicken soup'}));
  }, [dispatch]);
  return (
    <MainLayout>
      <Slider/>
      <Categories/>
      <div className="bg_bg">
        <AboutFoods/>
        <Blog/>
        <Client/>
      </div>
    </MainLayout>
  )
}
