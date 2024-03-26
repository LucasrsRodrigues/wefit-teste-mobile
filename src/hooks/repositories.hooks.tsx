import { UserSelectionModal } from "@components/UserSelectionModal";
import RepoHttpService from "@infrastructure/service/RepoHttpService";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { deleteDuplicates } from "@utils/index";
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

export type IRepository = {
  id: number;
  full_name: string;
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
  handleOpenModal(): void;
}

interface IRepositoriesProviderProps {
  children: ReactNode;
}

const RepositoriesContext = createContext({} as IRepositoriesContextProps);


function RepositoriesProvider({ children }: IRepositoriesProviderProps) {
  const [repositories, setRepos] = useState<Array<IRepository>>([]);
  const [favorites, setFavorites] = useState<IRepository[]>([]);
  const { getItem, setItem } = useAsyncStorage('@github:repos');
  const [ownerName, setOwnerName] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function addFavoriteRepository(repository: IRepository) {
    try {
      const existingFavorites = await getItem();
      const previousRepository = existingFavorites ? JSON.parse(existingFavorites) : [];

      const repositoryAlreadyExists = previousRepository.filter((item: IRepository) => item.id === repository.id);


      if (!!repositoryAlreadyExists[0] === false) {
        const data = [...previousRepository, repository];

        setFavorites(data);

        await setItem(JSON.stringify(data));

        setRepos(prev => prev.filter(item => item.id !== repository.id));
      }
    } catch (error) {
      alert(error);
    }
  }

  async function getFavorites() {
    try {
      const existingFavorites = await getItem();
      const favoritesRepository = existingFavorites ? JSON.parse(existingFavorites) : [];

      setFavorites(favoritesRepository)

    } catch (error) {
      alert(error);
    }
  }

  const getRepositories = useCallback(async () => {
    try {
      if (ownerName === "") {
        return;
      }

      const response = await RepoHttpService.get(ownerName);

      const item = deleteDuplicates(response.data, favorites, "full_name");

      setRepos(item);
    } catch (error) {
      alert(error);
    }
  }, [favorites, ownerName]);

  function submitModal(newOwnerName: string) {
    setOwnerName(newOwnerName);
  }

  function handleOpenModal() {
    setShowModal(true);
  }

  useEffect(() => {
    (async () => {
      await getFavorites();
      await getRepositories();
    })();
  }, [ownerName]);

  return (
    <RepositoriesContext.Provider
      value={{
        repositories,
        addFavoriteRepository,
        favorites,
        handleOpenModal
      }}
    >
      {children}

      <UserSelectionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        submitModal={submitModal}
      />
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