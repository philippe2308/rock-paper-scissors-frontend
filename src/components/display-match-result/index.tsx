import React, { PropsWithChildren } from "react";
import { Container } from "./styles";
import Card from "@/components/card";

const DisplayMatchResult = ({
  player1,
  player2,
  match,
}: {
  player1: ElementItem;
  player2: ElementItem;
  match: MatchResult;
}) => {
  const isPlayer1Winner = match.winner === player1.id;
  const winner = isPlayer1Winner ? player1 : player2;
  const loser = !isPlayer1Winner ? player1 : player2;
  const color = !isPlayer1Winner ? "#ce363fff" : "#195ab4";
  return (
    <Container color={color}>
      <div>
        <h1>Winner</h1>
        <Card
          selected
          secondary={!isPlayer1Winner}
          {...{ ...winner, image: winner.winnerImage }}
        ></Card>
      </div>
      <h1>{match.action}</h1>
      <div>
        <h1>Loser</h1>
        <Card
          selected
          secondary={!isPlayer1Winner}
          {...{ ...loser, image: loser.loserImage }}
        ></Card>
      </div>
    </Container>
  );
};

export default DisplayMatchResult;
