import { Card } from "antd";
import { useDispatch } from "react-redux";
import { StartButton } from "./StartButton";
import { setFavorite } from "../slicesOrFeatures/dataSlice";
import "./PokemonList.css";

export const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Card.Meta description={typeString} />
    </Card>
  );
};
