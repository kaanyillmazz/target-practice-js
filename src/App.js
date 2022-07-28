import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increasePoints} from "./features/points/pointsSlice";

function App() {
    const dispatch = useDispatch();
    const points = useSelector((state) => state.points.pointsCount);

    const myLogic = (event) => {
        event.target.style.opacity = 0;
        dispatch(increasePoints())
        setTimeout(()=>{event.target.style.opacity = 100;},1000);

    }


  return (
    <div className="App">
    <label style={{fontSize: "large"}}>{points} Points</label>
     <div className="imageHolder">
         <img onClick={myLogic} className="mainImage" src={'./assets/images/bullseye.png'} />
         <img onClick={myLogic} className="mainImage0" src={'./assets/images/bullseye.png'} />
         <img onClick={myLogic} className="mainImage1" src={'./assets/images/bullseye.png'} />
     </div>
    </div>
  );
}

export default App;
