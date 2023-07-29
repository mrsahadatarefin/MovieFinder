import React from 'react';


import { useState } from 'react';


import ContentWrapper from '../contentWraper/ContentWeaper';
import SwitchTabs from '../switchTabs/SwitchTabs';
import Carousel from '../carousel/Carousel';
import useFetch from '../../hooks/useFetch';


const TopRating = () => {
    const [endpoint,setEndpoint]= useState("movie")
    const {data,loading}=useFetch(`/${endpoint}/top_rated`)
      const onTabChange = (tab) => {
          setEndpoint(tab ==="Movies"?'movie':"tv")
      };
      return (
        <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Top Rated</span>
          <SwitchTabs
            data={["Movies", "TV Shows"]}
            onTabChange={onTabChange}
          ></SwitchTabs>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
      </div>
    );
  };

export default TopRating;