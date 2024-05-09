import React from "react";
import { FC } from "react";
import { useGetAnimeQuery } from "../../redux/services/animeSevices";
import { useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import AnimePreview from "../../components/animePreview/animePreview";

interface animeInterface {
  // id: number;
}

export const AnimePage: FC<animeInterface> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const animeId: number = id ? parseInt(id, 10) : 0;

  const {
    isLoading: animeLoading,
    data: animeData,
    error: animeError,
  } = useGetAnimeQuery(animeId);

  if (animeLoading) {
    return <div>Загрузка...</div>;
  }

  if (animeError) {
    // return <div>Ошибка: {animeError.message}</div>;
  }

  if (!animeData) {
    navigate(ROUTES.mainpage);
    return null;
  }
  return (
    <AnimePreview animeData={animeData} />
  );
}  