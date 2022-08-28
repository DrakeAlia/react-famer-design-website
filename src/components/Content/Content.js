import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import {
    ContentSec,
    ContentRow,
    TextWrapper,
    TopLine,
    Heading,
    ContentButton,
    Subtitle,
    ImgWrapper,
    Img,
    ContentColumn,
} from './ContentStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Tilt from 'react-tilt';

const Content = (
    {
        primary,
        topLine,
        headline,
        description,
        buttonLabel,
        img,
        alt,
        start,
        bottomImg,
        backgroundColor,
        linkTo,
        inverse,
        reverse,
        bigImage,
        id,
    }
) => {
    const initial = { opacity: 0, y: 30 }
    const transition = { delay: 0.3, durartion: 0.6 };
    const animation = useAnimation()

    return (
        <div></div>
    );
};

export default Content;
