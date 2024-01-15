import { GET_MATCH_RESULT } from "@/commun/eums/endpoints";
import axios from "@/service";

export const getMatchResult = ({
  player1,
  player2,
}: {
  player1: ElementItem;
  player2: ElementItem;
}): Promise<{ data: MatchResult }> => {
  return axios.get<MatchResult>(
    `${GET_MATCH_RESULT}/${player1.id}/${player2.id}`
  );
};
