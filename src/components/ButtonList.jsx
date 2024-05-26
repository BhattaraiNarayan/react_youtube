import Button from "./Button"

const ButtonData = [
  { id: 1, name: "All" },
  { id: 2, name: "Gaming" },
  { id: 3, name: "Songs" },
  { id: 4, name: "Live" },
  { id: 5, name: "Soccer" },
  { id: 6, name: "cricket" },
  { id: 7, name: "Cooking" },
  { id: 8, name: "Comedy" },
  { id: 9, name: "Web Development"},
  { id: 10, name: "Computer Programming" },
  { id: 11, name: "Mixes" },
];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button List={ButtonData} />
    </div>
  );
}

export default ButtonList
