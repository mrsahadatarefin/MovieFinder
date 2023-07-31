import React from 'react';
import "./style.scss"
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetilsBanner';
import Cast from './cast/Cast';
import VideosSection from './videoSections/VideoSections';
import Similar from './carousels/Simllar';
import Recommendation from './carousels/recommendtion';

const Details = () => {
    const {mediaType,id}=useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  
    return (
        <div>
          <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />  
        <Cast data={credits?.cast} loading={credits?.loading}/>
        <VideosSection data={data} loading={loading}/>
        <Similar mediaType={mediaType} id={id}/>
        <Recommendation mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;