import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
//   const images =  props.images.map( (image) => {
//         return <img alt={image.description} key={image.id} src={image.urls.regular}/>;
//     });
    //can be rewritten like this
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>;
    });
    //till here 
    return <div className="image-list">{images}</div>;
};

export default ImageList;