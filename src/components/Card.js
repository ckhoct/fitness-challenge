import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { config } from "../constants";

export default () => {
  const [currentItem, setCurrentItem] = useState("default");

  const item = config[currentItem];
  const { title, subtitle, max, min, unit, img } = item;

  const description = () => {
    if (subtitle) return subtitle;
    const reps = Math.floor(Math.random() * max);
    if (reps < min) return description();
    return `${reps} ${unit}`;
  };

  const onButtonClick = () => {
    const index = Math.floor(
      Math.random() * (Object.values(config).length - 1)
    );
    if (index === currentItem) return onButtonClick();
    setCurrentItem(index);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description()}</Card.Text>
        <Button onClick={onButtonClick} variant="primary">
          挑戰新項目
        </Button>
      </Card.Body>
    </Card>
  );
};
