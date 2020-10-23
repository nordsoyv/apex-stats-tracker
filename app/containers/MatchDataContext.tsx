/* eslint-disable react/prop-types,no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import { AddMatchData, MatchRecord } from '../db/types';
import * as db from '../db';

type DataContextType = {
  matches: MatchRecord[];
  currentRating: number;
  addMatch: (m: AddMatchData) => void;
};

type Props = unknown;

export const MatchDataContext = React.createContext<DataContextType>({
  matches: [],
  addMatch: () => {},
  currentRating: 0,
});

export const MatchDataWrapper: React.FC<Props> = ({ children }) => {
  const [matches, setMatches] = useState<MatchRecord[]>([]);
  const [rating, setRating] = useState<number>(0);
  useEffect(() => {
    const { matches, currentRating } = db.getAllData();
    setMatches(matches);
    setRating(currentRating);
  }, [setMatches]);
  const addMatch = useCallback(
    (newMatch: AddMatchData) => {
      const newData = db.addMatch(newMatch);
      setMatches(newData.matches);
      setRating(newData.currentRating);
    },
    [setMatches]
  );

  const value: DataContextType = { matches, addMatch, currentRating: rating };

  return <MatchDataContext.Provider value={value}>{children}</MatchDataContext.Provider>;
};
