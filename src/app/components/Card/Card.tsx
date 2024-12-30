"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Card.module.css";

type CardProps = {
  name: string;
  cost: number;
  power: number;
  hp: string;
  set: string;
  type: string;
  traits: string[];
  rarity: string;
  frontArt: string | null;
};

export default function Card({
  name,
  cost,
  power,
  hp,
  type,
  traits,
  rarity,
  frontArt,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles["card-container"]} ${
        isFlipped ? styles["is-flipped"] : ""
      }`}
      onClick={handleCardClick} // Toggle flip state on click
    >
      <div className={styles.card}>
        {/* Front of the Card */}
        <div className={styles["card-front"]}>
          <Image
            src={frontArt || "/fallback-image.jpg"}
            alt={name}
            width={200}
            height={300}
            className={styles["card-image"]}
          />
        </div>

        {/* Back of the Card */}
        <div className={styles["card-back"]}>
          <div>
            <h1 className={styles["card-title"]}>{name}</h1>
            <h2 className={styles["card-type"]}>{type}</h2>

            <div className={styles["card-stats"]}>
              <div className={styles["card-stat"]}>
                <div className={styles["card-stat-label"]}>Cost</div>
                <div className={styles["card-stat-value"]}>{cost}</div>
              </div>
              <div className={styles["card-stat"]}>
                <div className={styles["card-stat-label"]}>Power</div>
                <div className={styles["card-stat-value"]}>{power}</div>
              </div>
              <div className={styles["card-stat"]}>
                <div className={styles["card-stat-label"]}>HP</div>
                <div className={styles["card-stat-value"]}>{hp}</div>
              </div>
              <div className={styles["card-stat"]}>
                <div className={styles["card-stat-label"]}>Rarity</div>
                <div className={styles["card-stat-value"]}>{rarity}</div>
              </div>
            </div>
            <div className={styles["card-stat"]}>
              <div className={styles["card-stat-label"]}>Traits</div>
              <div className={styles["card-stat-value"]}>
                {traits.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
