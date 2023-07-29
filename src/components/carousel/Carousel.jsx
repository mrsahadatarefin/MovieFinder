import React from 'react';
import"./style.scss"
import  { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from '../contentWraper/ContentWeaper';
import Img from "../lazyLoadingImage/img";
import PosterFallback from "../../assets/no-poster.png";
const Carousel = ({data,loading}) => {
    return (
        <div>
            
        </div>
    );
};

export default Carousel;