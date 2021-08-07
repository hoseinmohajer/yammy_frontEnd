import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getList} from '../../redux/slices/categories';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ImageWrapper} from './style';
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Categories = ({ titleLess }: {titleLess?: boolean | undefined}) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { data } = useSelector(state => state.categoriesList);
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  const CustomRightArrow: any = ({ onClick }: {onClick: React.FunctionComponent}) => {
    // onMove means if dragging or swiping in progress.
    return <button style={{
      width: '50px',
      height: '45px',
      background: 'url(/images/arrow-right.jpg)',
      float: 'right',
      opacity: '1',
      color: '#000',
      position: 'absolute',
      right: 0,
      bottom: 0
    }} onClick={() => onClick} />;
  };
  const CustomLeftArrow: any = ({ onClick }: {onClick: React.FunctionComponent}) => {
    // onMove means if dragging or swiping in progress.
    return <button
      style={{
        width: '50px',
        height: '45px',
        background: 'url(/images/arrow-left.jpg)',
        float: 'left',
        opacity: 1,
        color: '#000',
        position: 'absolute',
        left: 0,
        bottom: 0
      }}
      onClick={() => onClick} />;
  };
  const myLoader = ({ src, width, quality }: {src: string | undefined; width: number | undefined; quality?: number | undefined}) => {
    return `http://localhost:3001/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <section className="resip_section">
      <div className="container">
        <div className="row">
          {!titleLess &&
            <div className="col-md-12">
              <div className="ourheading">
                <h2>Our Categories</h2>
              </div>
            </div>
          }
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Carousel
                  responsive={responsive}
                  customRightArrow={<CustomRightArrow />}
                  customLeftArrow={<CustomLeftArrow />}
                >
                  {data && data.map((category: {image: {path: string}, title: string; description: string;}, key: number) => {
                    return (
                      <div
                        key={key}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column'
                        }}
                      >
                        <ImageWrapper>
                        <Image
                          className='image-wrapper'
                          loader={myLoader}
                          src={category.image.path}
                          alt={category.title}
                          width={214}
                          height={212}
                        />
                        </ImageWrapper>
                        <div style={{marginTop: '16px'}}>
                          <h4
                            style={{
                              color: '#fff',
                              fontSize: '20px',
                              fontWeight: 500,
                              textAlign: 'center',
                              maxWidth: 214
                            }}
                          >{category.title}</h4>
                          <p style={{
                            color: '#fff',
                            fontSize: '16px',
                            textAlign: 'center',
                            maxWidth: 200,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                          >{category.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
