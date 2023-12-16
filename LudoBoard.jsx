import { useState } from "react";
export default function LudoBoard() {
    let [moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    let [arr,SetArr] = useState("no moves");

    let updateBlue = () => {
        // console.log(`moves.blue ${moves.blue}`);
        // setMoves((prevMoves) => {
        //     return(
        //         {...prevMoves,blue:prevMoves.blue + 1}
        //     )
        // });
        SetArr((prevArr) => {
            return[...prevArr,",blue moves"];
        });
        console.log(arr);
    }
    let updateRed = () => {
        console.log(`moves.red ${moves.red}`);
        setMoves((prevMoves) => {
            return(
                {...prevMoves,red:prevMoves.red + 1}
            )
        });
    }
    let updateYellow = () => {
        console.log(`moves.yellow ${moves.yellow}`);
        setMoves((prevMoves) => {
            return(
                {...prevMoves,yellow:prevMoves.yellow + 1}
            )
        });
    }
    let updateGreen = () => {
        console.log(`moves.green ${moves.green}`);
        setMoves((prevMoves) => {
            return(
                {...prevMoves,green:prevMoves.green + 1}
            )
        });
    }

    return(
        <div>
            <p>Game Begins!</p>
            <div>
                <p>Red moves = {moves.red}</p>
                <button onClick={updateRed} style={{background:"red"}}>+1</button>
               <p>Yellow moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{background:"yellow"}}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button onClick={updateGreen} style={{background:"green"}}>+1</button>
                <p>Blue moves = {moves.blue}</p>
                <p>{arr}</p>
                <button onClick={updateBlue} style={{background:"blue"}}>+1</button> 
            </div>
        </div>
    );
}
