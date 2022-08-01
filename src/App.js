import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increasePoints} from "./features/points/pointsSlice";

let audio = new Audio('./assets/sounds/correct.mp3');


function App() {

    const dispatch = useDispatch();
    const points = useSelector((state) => state.points.pointsCount);

    const myLogic = (event) => {
        audio.currentTime = 0;
        audio.play();
        event.target.classList.add("disabled");
        dispatch(increasePoints())
        setTimeout(() => {
            event.target.classList.remove("disabled")
        }, 1000);

    }

    let countLocal = 60;

    function setTime() {
        countLocal--;
        let counterLabel = document.getElementById("counterLabel");
        counterLabel.innerText = countLocal.toString() + " Seconds Remaining!";
    }


    const startGame = (event) => {
        let b1 = document.getElementById("b1");
        let b2 = document.getElementById("b2");
        let b3 = document.getElementById("b3");
        let b4 = document.getElementById("b4");
        let myLabel = document.getElementById("countdown");
        myLabel.classList.add("countAnim");
        setTimeout(() => {
            myLabel.innerText = "2"
        }, 1000);
        setTimeout(() => {
            myLabel.innerText = "1"
        }, 2000);
        setTimeout(() => {
            myLabel.innerText = "GO"
        }, 3000);
        setTimeout(() => {
            b1.classList.remove("disabled")
        }, 3000);
        setTimeout(() => {
            b2.classList.remove("disabled")
        }, 3000);
        setTimeout(() => {
            b3.classList.remove("disabled")
        }, 3000);
        setTimeout(() => {
            b4.classList.remove("disabled")
        }, 3000);
        let myVar;
        setTimeout(() => {
            myVar = setInterval(() => {
                setTime()
            }, 1000);
        }, 3000);
        setTimeout(() => {
            clearInterval(myVar);
        }, 64000);
        setTimeout(() => {
            b1.classList.add("disabled")
        }, 64000);
        setTimeout(() => {
            b2.classList.add("disabled")
        }, 64000);
        setTimeout(() => {
            b3.classList.add("disabled")
        }, 64000);
        setTimeout(() => {
            b4.classList.add("disabled")
        }, 64000);
        setTimeout(() => {
            myLabel.innerText = "Time's up!"
        }, 64000);

    }


    return (<div className="App">
            <div className="info">
                <label id="pointsLabel">{points} Points</label>
                <label id="counterLabel">60 Seconds Remaining</label>
                <button id="startButton" onClick={startGame}>Start</button>
            </div>
            <div className="count">
                <label className="countLabel" id="countdown">3</label>
            </div>

            <div className="imageHolder">
                <img id="b1" draggable="false" onClick={myLogic} className="mainImage disabled"
                     src={'./assets/images/bullseye.png'}/>
                <img id="b2" draggable="false" onClick={myLogic} className="mainImage0 disabled"
                     src={'./assets/images/bullseye.png'}/>
                <img id="b3" draggable="false" onClick={myLogic} className="mainImage1 disabled"
                     src={'./assets/images/bullseye.png'}/>
                <img id="b4" draggable="false" onClick={myLogic} className="mainImage2 disabled"
                     src={'./assets/images/bullseye.png'}/>
            </div>
        </div>);
}

export default App;
