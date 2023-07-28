import React from 'react';
import "./style.scss"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadingImage/img';
import ContentWrapper from '../../../components/contentWraper/ContentWeaper';
const HeroBanner = () => {
    const {data,loading}= useFetch("/movie/upcoming")
    const [background,setBackground] =useState("")
    const [query,setQuery] =useState("")
    const {url}=useSelector(state=>state.home)
    console.log('heeo',data)  
    const navigate = useNavigate()
    
    useEffect(()=>{
  const bg =url.backdrop +data?.results?.[Math.floor(Math.random()*20)].backdrop_path
  setBackground(bg)
    },[data])
      const searchQueryHandler = (event)=>{
  
       if(event.key === "Enter" && query.length > 0){
          navigate(`/search/${query}`)
  
       }
    }
    
   
    
    return (
        <div className="heroBanner">
        {!loading &&<div className='backdrop-img'>
          <Img src={background}/>

         </div>

        }
        
        <div className='opacity-layer'>

        </div>
         <ContentWrapper>
         <div className="wrapper">
            <div className="heroBannerContent">
               <span className='title'>Welcome.</span> 
               <span className='subTitle'>MIllions of movies, tv shows and people to discover Explore now.</span> 
         <div className='searchInput'>
            <input
             onChange={(e)=> setQuery(e.target.value)}
             type="text"
             placeholder='search for a movie or tv show ...'
             onKeyUp={searchQueryHandler}
            
             />
             <button>Search</button>
         </div>
            </div>
            </div>  

         </ContentWrapper>
         
        </div>
    );
};

export default HeroBanner;