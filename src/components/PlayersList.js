import { Player } from "./Player";
import { playersObj } from "./Player";

// name, team, nationality, jerseyNumber, age, and an Image URL for the player.

const PlayersList = () => {
    // playersObj.map((playerEach)=>Player)

    return (<>
        {playersObj.map((playerEach) => (< Player name={playerEach.name} team={playerEach.team} nationality={playerEach.nationality} jerseyNumber={playerEach.jerseyNumber} age={playerEach.age} imageUrl={playerEach.imageUrl}/>))}
    </>
    );
};

export default PlayersList