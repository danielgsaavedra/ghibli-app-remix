import { NavLink } from "@remix-run/react";
import type { FilmCharacter } from "~/api/films";

type CharacterListProps = {
  characters: FilmCharacter[];
};

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="flex-1 max-w-md mx-auto mt-10">
      <h3 className="text-3xl text-center mb-6">Characters</h3>
      <ul className="flex flex-col space-y-4">
        {characters?.map((character) => (
          <li key={character.id}>
            <NavLink
              to={"character/" + character.id}
              className={({ isActive }) =>
                `block w-full text-left hover:underline p-4 rounded border transition transform hover:shadow-lg ${
                  isActive
                    ? "border-slate-500 bg-slate-300 text-black font-bold"
                    : "border-slate-400 text-blue-500"
                }`
              }
            >
              {character.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
