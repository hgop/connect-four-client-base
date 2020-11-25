import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import styles from "./App.module.css";
import { StartGame } from "../StartGame/StartGame";

import {
  Game,
  GameApiClient,
  MockGameClient,
} from "../../external_services/game_api_client";

interface Props {
  columns: number;
  rows: number;
  client: GameApiClient;
  initialGame: Game;
  handlePlayAgain: () => void;
}

const PlayGame = ({
  columns,
  rows,
  client,
  initialGame,
  handlePlayAgain,
}: Props) => {
  const [game, setGame] = useState<Game>(initialGame);

  useEffect(() => {
    const id = setInterval(async () => {
      const res = await client.getGame({
        gameId: game.gameId,
        playerId: game.playerId,
      });
      res && setGame(res);
    }, 1000);
    return () => clearInterval(id);
  }, [client, game]);

  const handleMakeMove = (column: number) => {
    client
      .makeMove({
        gameId: game.gameId,
        playerId: game.playerId,
        column: column,
      })
      .then((res?: Game) => {
        if (res === undefined) return;
        setGame(res);
      });
  };

  const statusMessage =
    game.playerCount < 2
      ? "Waiting for more players"
      : game.winner
      ? `WINNER WINNER CHICKEN DINNER, Player ${game.winner} won the game`
      : game.active
      ? `It's Player ${game.activePlayer}'s turn`
      : "Game finished with a draw";

  return (
    <div className={styles.app}>
      {game.winner ? null : <h2>You are player: {game.playerNumber}</h2>}
      Game Id: {game.gameId}
      <Board
        columns={columns}
        rows={rows}
        board={game.board}
        onTileClick={(id) => {
          handleMakeMove(id);
        }}
      />
      <div className={styles.statusMessage}>{statusMessage}</div>
      {game.active ? null : (
        <button style={{ width: "100%" }} onClick={handlePlayAgain}>
          Play Again
        </button>
      )}
    </div>
  );
};

interface AppProps {
  columns: number;
  rows: number;
  client: GameApiClient | MockGameClient;
}

export const App = ({ columns, rows, client }: AppProps) => {
  const [game, setGame] = useState<Game | undefined>(undefined);

  const handleGameStart = () => {
    client.createGame({}).then((res: Game) => {
      setGame(res);
    });
  };

  const handleJoinGame = (gameId: string) => {
    client.joinGame({ gameId: gameId }).then((res: Game) => {
      setGame(res);
      // TODO handle if not available
    });
  };

  return game ? (
    <PlayGame
      initialGame={game}
      columns={columns}
      rows={rows}
      client={client}
      handlePlayAgain={() => setGame(undefined)}
    />
  ) : (
    <StartGame
      startSinglePlayerGame={() => handleGameStart()}
      startMultiplayerGame={() => handleGameStart()}
      joinGame={(value: any) => handleJoinGame(value)}
    />
  );
};

export default App;
