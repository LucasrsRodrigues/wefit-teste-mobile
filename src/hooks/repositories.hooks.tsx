import RepoHttpService from "@infrastructure/service/RepoHttpService";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type IRepository = {
  id: number;
  name: string;
  description?: string;
  owner: {
    avatar_url: string;
    login: string;
  },
  stargazers_count: string;
  language: string;
  html_url: string;
};

interface IRepositoriesContextProps {
  repositories: IRepository[];
  addFavoriteRepository: (repository: IRepository) => Promise<void>;
  favorites: IRepository[];
}

interface IRepositoriesProviderProps {
  children: ReactNode;
}

const RepositoriesContext = createContext({} as IRepositoriesContextProps);


function RepositoriesProvider({ children }: IRepositoriesProviderProps) {
  const [repositories, setRepos] = useState<Array<IRepository>>([]);
  const [favorites, setFavorites] = useState<IRepository[]>([]);
  const { getItem, setItem } = useAsyncStorage('@github:repos');

  async function addFavoriteRepository(repository: IRepository) {
    try {
      const existingFavorites = await getItem();
      const previousRepository = existingFavorites ? JSON.parse(existingFavorites) : [];

      const repositoryAlreadyExists = previousRepository.filter((item: IRepository) => item.id !== repository.id);

      if (!!repositoryAlreadyExists) {
        const data = [...previousRepository, repository];

        setFavorites(data);

        await setItem(JSON.stringify(data));

        setRepos(prev => prev.filter(item => item.id !== repository.id));
      }

      console.log("----addFavoriteRepository");
      console.log(repository)
      console.log("----addFavoriteRepository");
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await RepoHttpService.get("appswefit");

        setRepos(response.data);
      } catch (error) {
        alert(error)
      }
    })();
  }, []);

  return (
    <RepositoriesContext.Provider
      value={{
        repositories,
        addFavoriteRepository,
        favorites
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  )
}

function useRepositories() {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error('useRepositories must be used within an RepositoriesProvider');
  }

  return context;
}


export {
  RepositoriesProvider,
  useRepositories
}