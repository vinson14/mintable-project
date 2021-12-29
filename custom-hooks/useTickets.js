import { useEffect, useState } from "react";
import { getTickets } from "../utils/api";

const useTickets = () => {
  const [numSilverTickets, setNumSilverTickets] = useState(0);
  const [numGoldTickets, setNumGoldTickets] = useState(0);
  const [numDiamondTickets, setNumDiamondTickets] = useState(0);
  const [numTotalTickets, setNumTotalTickets] = useState(0);

  useEffect(() => {
    getTickets().then((res) => {
      setNumSilverTickets(res.silver);
      setNumGoldTickets(res.gold);
      setNumDiamondTickets(res.diamond);
      setNumTotalTickets(res.silver + res.gold + res.diamond);
    });
  }, []);

  return [numSilverTickets, numGoldTickets, numDiamondTickets, numTotalTickets];
};

export default useTickets;
