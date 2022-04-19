import React from "react";
import { PlanetInterface } from "../store/PlanetStore";

type CardProps = {
  planet: PlanetInterface;
}

export default function (props: CardProps) {
  const {name, description, climates, diameter} = props.planet;
  return (
    <div className="w-3/4 my-5 mx-auto bg-slate-700 shadow-xl rounded-lg text-gray-50 flex flex-wrap flex-col">
      <div className="p-2">
        <div className="flex flex-wrap justify-between">
          <h2 className="text-5xl text-amber-400 font-bold">{name}</h2>
          <div className="flex">
            <div className="mr-10">
              <h3 className="font-bold text-amber-600">Climates</h3>
              <ul>
                {climates.map((climate) => (
                  <li key={climate}>{climate.charAt(0).toUpperCase().concat(climate.slice(1))}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-600">Diameter</h3>
              <p>{diameter || "Unknown"}</p>
            </div>
          </div>
        </div>
        <p className="text-2xl baseline-1/2">{description}</p>
      </div>
    </div>
  );
}