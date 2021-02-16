import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Planet } from '../shared/interfaces';

interface FavoritesContextData {
  planets: Planet[];
  togglePlanet(planet: Planet): Promise<void>;
  isFavorite(planetId: string): boolean;
}

const FavoritesContext = createContext({} as FavoritesContextData);

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    async function loadPlanetsFromStorage() {
      const planetsOnStorage = await AsyncStorage.getItem(
        '@solarsystem/favorite-planets',
      );

      if (planetsOnStorage) {
        const newPlanets = JSON.parse(planetsOnStorage);
        setPlanets(newPlanets);
      }
    }

    loadPlanetsFromStorage();
  }, []);

  const isFavorite = useCallback(
    (planetId: string) => {
      return !!planets.find(planet => planet.id === planetId);
    },
    [planets],
  );

  const togglePlanet = useCallback(
    async (planetToToggle: Planet) => {
      const planetFoundIndex = planets.findIndex(
        planet => planet.id === planetToToggle.id,
      );

      let newPlanets: Planet[];
      if (planetFoundIndex >= 0) {
        newPlanets = planets.filter(planet => planet.id !== planetToToggle.id);
      } else {
        newPlanets = [...planets, planetToToggle];
      }

      setPlanets(newPlanets);
      await AsyncStorage.setItem(
        '@solarsystem/favorite-planets',
        JSON.stringify(newPlanets),
      );
    },
    [planets],
  );

  return (
    <FavoritesContext.Provider value={{ planets, isFavorite, togglePlanet }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used with FavoritesContextProvider');
  }

  return context;
}
