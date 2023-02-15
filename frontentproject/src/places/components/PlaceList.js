import React, { useContext } from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceList.css";
import { useParams } from "react-router-dom";

const PlaceList = (props) => {
  const auth = useContext(AuthContext);
  const userId = useParams().userId;

  if (props.items.length === 0) {
    return (
      <div className="place-item center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          {auth.userId ===userId &&(<Button to="/places/new">Share Place</Button>)}
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
