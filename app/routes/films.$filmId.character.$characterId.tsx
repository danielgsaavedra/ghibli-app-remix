import type { LoaderFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";
import type { FilmCharacter } from "~/api/films";
import { getFilmCharacter } from "~/api/films";

export let loader: LoaderFunction = async ({ params }) => {
  invariant(params?.characterId, "Missing character ID");
  // throw new Error("Something went wrong");
  const character = await getFilmCharacter(params.characterId);
  return character;
};

export default function Character() {
  const characterDetails = useLoaderData<FilmCharacter>();
  return (
    <div className="mt-10">
      <h2 className="text-3xl text-center mb-5">Character Details</h2>
      <div className="p-6 rounded-lg shadow-lg border border-slate-400 bg-white">
        <h3 className="text-slate-700 font-bold text-2xl mb-4">
          {characterDetails.name}
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex justify-between">
            <span>Gender:</span>
            <span className="font-medium">{characterDetails.gender}</span>
          </li>
          <li className="flex justify-between">
            <span>Age:</span>
            <span className="font-medium">{characterDetails.age}</span>
          </li>
          <li className="flex justify-between">
            <span>Eye Color:</span>
            <span className="font-medium">{characterDetails.eye_color}</span>
          </li>
          <li className="flex justify-between">
            <span>Hair Color:</span>
            <span className="font-medium">{characterDetails.hair_color}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.log("Error:", error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="mt-10">
        <h2 className="text-3xl text-center mb-5">Character Details</h2>
        <div className="p-6 rounded-lg shadow-lg border border-rose-600 bg-rose-200">
          <div className="text-gray-700 font-bold text-2xl mb-4">
            {error.status} {error.statusText}
          </div>
          <p className="text-gray-600">{error?.data}</p>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="mt-10">
        <h2 className="text-3xl text-center mb-5">Character Details</h2>
        <div className="p-6 rounded-lg shadow-lg border border-rose-600 bg-rose-200">
          <div className="text-gray-700 font-bold text-2xl mb-4">
            Something went wrong
          </div>
          <p className="text-gray-600">{error?.message}</p>
        </div>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
