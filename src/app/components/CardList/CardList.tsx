"use client";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "animate.css";
import styles from "../../styles/Button.module.css";

type ApiCardResponse = {
  Set: string;
  Number: string;
  Name: string;
  Type: string;
  Aspects: string[];
  Traits: string[];
  Arenas: string[];
  Cost: number;
  Power: number;
  HP: number;
  FrontText: string;
  DoubleSided: boolean;
  Rarity: string;
  Unique: boolean;
  Artist: string;
  VariantType: string;
  MarketPrice: string;
  FoilPrice: string;
  FrontArt: string;
};

type CardData = {
  set: string;
  number: string;
  name: string;
  type: string;
  aspects: string[];
  traits: string[];
  arenas: string[];
  cost: number;
  power: number;
  hp: number;
  fronttext: string;
  doublesided: boolean;
  rarity: string;
  unique: boolean;
  artist: string;
  varianttype: string;
  marketprice: string;
  foilprice: string;
  frontArt: string;
  id: string;
};

type CardListProps = {
  hp: string;
};

export default function CardList({ hp }: CardListProps) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    if (!hp) return;
    setLoading(true);
    setError(null);

    async function fetchCards() {
      try {
        const queryParam = hp.includes("-") ? `range=${hp}` : `hp=${hp}`;
        const res = await fetch(`/api/search?${queryParam}`);
        if (!res.ok) {
          const errorData = await res.json();
          console.error("API Error:", errorData);
          throw new Error("Failed to fetch cards");
        }
        const data = await res.json();

        const formattedCards = Array.isArray(data.data)
          ? data.data.map((card: ApiCardResponse, index: number) => ({
              set: card.Set || "UnknownSet",
              number: card.Number || `UnknownNumber-${index}`,
              name: card.Name || `Unnamed Card ${index}`,
              type: card.Type || "UnknownType",
              aspects: card.Aspects || [],
              traits: card.Traits || [],
              arenas: card.Arenas || [],
              cost: card.Cost ?? 0,
              power: card.Power ?? 0,
              hp: card.HP ?? 0,
              fronttext: card.FrontText || "",
              doublesided: card.DoubleSided ?? false,
              rarity: card.Rarity || "Common",
              unique: card.Unique ?? false,
              artist: card.Artist || "Unknown Artist",
              varianttype: card.VariantType || "None",
              marketprice: card.MarketPrice || "N/A",
              foilprice: card.FoilPrice || "N/A",
              frontArt: card.FrontArt || null,
              id: `${card.Set || "UnknownSet"}-${
                card.Number || `UnknownNumber-${index}`
              }`,
            }))
          : [];
        setCards(formattedCards);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setCards([]);
        setLoading(false);
      }
    }

    fetchCards();
  }, [hp]);

  const handleSort = (key: keyof CardData) => {
    setIsSorting(true);
    setTimeout(() => {
      setCards([...cards].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
      setIsSorting(false);
    }, 1000);
  };

  const buttonColors = ["blue", "green", "purple", "red"];

  const sortingButtons = [
    { label: "Sort by Name", key: "name" as keyof CardData },
    { label: "Sort by Set", key: "set" as keyof CardData },
    { label: "Sort by Cost", key: "cost" as keyof CardData },
    { label: "Sort by Power", key: "power" as keyof CardData },
  ];

  return (
    <section className="p-6">
      <div className="flex justify-center gap-4 mb-6">
        {sortingButtons.map((button, index) => (
          <button
            key={button.key}
            onClick={() => handleSort(button.key)}
            className={`${styles.button} ${styles.raise} ${
              styles[buttonColors[index % buttonColors.length]]
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
      {loading && (
        <p className="text-center text-lg font-semibold">Loading cards...</p>
      )}
      {error && (
        <p className="text-center text-red-500 text-lg font-semibold">
          Error: {error}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`animate__animated ${
              isSorting ? "animate__lightSpeedOutLeft" : "animate__zoomIn"
            }`}
          >
            <Card
              name={card.name}
              set={card.set}
              cost={card.cost}
              power={card.power}
              hp={card.hp.toString()}
              type={card.type}
              traits={card.traits}
              rarity={card.rarity}
              frontArt={card.frontArt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
