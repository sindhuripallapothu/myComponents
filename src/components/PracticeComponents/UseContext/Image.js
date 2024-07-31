import React, { useState, useContext } from 'react';
import { places } from './data'
import { getImageUrl } from './util';
import { ImageSizeContext } from './Context';
const ImageComponent = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <ImageSizeContext.Provider value={imageSize}>
            <label>
                <input
                    type='checkbox'
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked)
                    }}
                />
                Use Large Images
            </label>
            <List />
        </ImageSizeContext.Provider>
    )
}

const List = () => {
    const listItems = places.map((place) =>
        <li key={place.id}>
            <Place place={place} />
        </li>
    )
    return <ul>{listItems}</ul>
}

const Place = ({ place }) => {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                <b>{place.name}</b> : {place.description}
            </p>
        </>
    )
}

const PlaceImage = ({ place }) => {
    const imageSize = useContext(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    )
}
export default ImageComponent;