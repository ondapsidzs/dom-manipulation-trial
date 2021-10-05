import { useState, useEffect } from "react";
import { GridContainer, GridContent, GridItem } from "./GridStyled";

const Grid = (props) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(
        "https://photos-6ebed-default-rtdb.firebaseio.com/images.json"
      );
      const data = res.json();
      return data;
    };

    const fetchedData = async () => {
      const data = await fetchingData();

      setImageData(data);
    };

    fetchedData();
  }, []);

  return (
    <GridContainer>
      <GridContent>
        {/* {imageData.map((image, index) => {
          return (
            <GridItem
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={props.activeToggle}
            />
          );
        })} */}
      </GridContent>
    </GridContainer>
  );
};

export default Grid;
