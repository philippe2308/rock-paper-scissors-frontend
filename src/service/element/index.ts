import { GET_ELEMENTS } from "@/commun/eums/endpoints";
import axios from "@/service";

export const getElementsList = (): Promise<{ data: ElementItem[] }> => {
  return axios.get<ElementItem[]>(GET_ELEMENTS);
};
