import React, { useState } from "react";
import styles from "./StartGame.module.css";
interface Props {
  startMultiplayerGame: () => void;
  startLocalGame: () => void;
  joinGame: (id: string) => void;
}
export const StartGame = ({
  startMultiplayerGame,
  startLocalGame,
  joinGame,
}: Props): React.ReactElement => {
  const [gameId, setGameId] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(event.target.value);
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Connect Four!</h2>
      <div>
        <input value={gameId} onChange={handleChange}></input>
        <button onClick={() => joinGame(gameId)}>Join Existing Game</button>
      </div>
      <div>
        <button className={styles.fullWidth} onClick={startLocalGame}>
          Start Local co-op Game
        </button>
      </div>
      <div>
        <button className={styles.fullWidth} onClick={startMultiplayerGame}>
          Start Multiplayer Game
        </button>
      </div>
    </div>
  );
};
