import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token:Home", token);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <div className="my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reiciendis labore iste maxime reprehenderit nisi, commodi veritatis
        minus placeat facilis.
      </div>
      <div className="my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reiciendis labore iste maxime reprehenderit nisi, commodi veritatis
        minus placeat facilis.
      </div>
      <div className="my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reiciendis labore iste maxime reprehenderit nisi, commodi veritatis
        minus placeat facilis.
      </div>
      <div className="my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reiciendis labore iste maxime reprehenderit nisi, commodi veritatis
        minus placeat facilis.
      </div>
      <div className="my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reiciendis labore iste maxime reprehenderit nisi, commodi veritatis
        minus placeat facilis.
      </div>
      <div className="my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reiciendis labore iste maxime reprehenderit nisi, commodi veritatis
        minus placeat facilis.
      </div>
      <div className="my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reiciendis labore iste maxime reprehenderit nisi, commodi veritatis
        minus placeat facilis.
      </div>
    </div>
  );
};

export default Home;
