import Card from "@/components/card";
import DisplayMatchResult from "@/components/display-match-result";
import List from "@/components/list";
import MatchButton from "@/components/match-button";
import { getElementsList } from "@/service/element";
import { getMatchResult } from "@/service/match";
import React, { useEffect, useState } from "react";

function Board() {
  const [elements, setElements] = useState<ElementItem[]>();
  const [player1, setPlayer1] = useState<ElementItem>();
  const [player2, setPlayer2] = useState<ElementItem>();

  const [matchResult, setMatchResult] = useState<MatchResult>();

  const playMatch = () => {
    if (player1 && player2)
      getMatchResult({ player1, player2 }).then((resp) => {
        setMatchResult(resp.data);
      });
  };

  useEffect(() => {
    if (elements === undefined)
      getElementsList().then((resp: { data: ElementItem[] }) => {
        setElements(resp.data);
      });
  }, []);

  const clearMatch = () => {
    setMatchResult(undefined);
    setPlayer1(undefined);
    setPlayer2(undefined);
  };
  const selectElement = ({
    elementA,
    elementB,
    setElementA,
  }: {
    elementA?: ElementItem;
    elementB?: ElementItem;
    setElementA: (ele: ElementItem) => void;
  }) => {
    if (matchResult !== undefined) {
      clearMatch();
    }
    if (
      elementA !== undefined &&
      (elementB === undefined || elementA.id !== elementB?.id)
    ) {
      setElementA(elementA);
    }
  };

  return (
    <div className="App">
      <List>
        {elements?.map((element) => (
          <div style={{ width: "15%" }}>
            <Card
              disabled={player2?.id === element.id}
              selected={player1?.id === element.id}
              action={() =>
                selectElement({
                  elementA: element,
                  elementB: player2,
                  setElementA: setPlayer1,
                })
              }
              {...element}
            ></Card>
          </div>
        ))}
      </List>

      {matchResult && player1 && player2 ? (
        <DisplayMatchResult
          player1={player1}
          player2={player2}
          match={matchResult}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
            position: "relative",
          }}
        >
          <List>
            {player1 ? (
              <Card selected {...player1}></Card>
            ) : (
              <Card
                id={0}
                name={"Escolha um elemento acima"}
                image={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Feather-arrows-arrow-up.svg/2048px-Feather-arrows-arrow-up.svg.png"
                }
                winnerImage={""}
                loserImage={""}
              ></Card>
            )}
          </List>
          <MatchButton
            disabled={player1 === undefined || player2 === undefined}
            action={playMatch}
          />
          <List secondary>
            {player2 ? (
              <Card selected secondary {...player2}></Card>
            ) : (
              <Card
                secondary
                id={0}
                name={"Escolha um elemento abaixo"}
                image={
                  "https://www.svgrepo.com/show/384739/thin-arrow-direction-down-download.svg"
                }
                winnerImage={""}
                loserImage={""}
              ></Card>
            )}
          </List>
        </div>
      )}
      <List secondary>
        {elements?.map((element) => (
          <div style={{ width: "15%" }}>
            <Card
              disabled={player1?.id === element.id}
              selected={player2?.id === element.id}
              action={() =>
                selectElement({
                  elementA: element,
                  elementB: player1,
                  setElementA: setPlayer2,
                })
              }
              secondary
              {...element}
            ></Card>
          </div>
        ))}
      </List>
    </div>
  );
}

export default Board;
