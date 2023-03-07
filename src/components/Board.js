import { useNavigate } from "react-router-dom";

function Board() {
  const navigate = useNavigate();
  return (
    <div className="gameboard">
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
export default Board;
