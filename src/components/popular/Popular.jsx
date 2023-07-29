








import React from 'react';


import ContentWrapper from "../contentWraper/ContentWeaper";
import SwitchTabs from "../switchTabs/SwitchTabs";
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Carousel from '../carousel/Carousel';


const Popular = () => {
    const [endpoint,setEndpoint]= useState("movie")
  const {data,loading}=useFetch(`/${endpoint}/popular`)
    const onTabChange = (tab) => {
        setEndpoint(tab ==="Movies"?'movie':"tv")
    };

    return (
        <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">What's popular</span>
          <SwitchTabs
            data={["Movies", "TV Shows"]}
            onTabChange={onTabChange}
          ></SwitchTabs>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
      </div>
    );
  };
  
export default Popular;
