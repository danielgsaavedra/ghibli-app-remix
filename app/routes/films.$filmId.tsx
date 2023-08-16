import type { LoaderFunction } from "@remix-run/node";
import type { Film } from "~/api/films";
import { getFilmById } from "~/api/films";
import invariant from "tiny-invariant";
import { Outlet, useLoaderData } from "@remix-run/react";
import FilmBanner from "~/components/FilmBanner";
import CharacterList from "~/components/CharacterList";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, "Film ID is required");
  const film = await getFilmById(params.filmId);
  return film;
};

export default function Film() {
  const film = useLoaderData<Film>();
  return (
    <div>
      <FilmBanner film={film} />
      <div className="p-10">
        <h4 className="text-lg font-bold">{film.description}</h4>
        <div className="flex p-5 space-x-5">
          <CharacterList characters={film.characters} />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
