import { useSelector } from "react-redux";

function List() {
  const userData = useSelector((store) => store.userData);
  return (
    <div>
      <h1>List</h1>
      <div>
        <p>{userData.listPack[1].name}</p>
      </div>
    </div>
  );
}

export default List;
