import type { LoaderFunction } from "@remix-run/node";
import type { Film } from "~/api/films";
import { getFilmById } from "~/api/films";
import invariant from "tiny-invariant";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, "Film ID is required");
  const film = await getFilmById(params.filmId);
  console.log("Fetching film", film.title);
  return film;
};

export default function Film() {
  const film = useLoaderData<Film>();
  return <div>{film.title}</div>;
}
