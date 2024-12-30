"use client";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";

export default function Page() {
  const [filter, setFilter] = useState<string>("");
  const [selectedHp, setSelectedHp] = useState<string>("");
  const [selectedRange, setSelectedRange] = useState<string>("");

  const handleSelection = (hp: string) => {
    setSelectedHp(hp);
    setSelectedRange("");
    setFilter(hp);
  };

  const handleRangeSelection = (range: string) => {
    setSelectedRange(range);
    setSelectedHp("");
    setFilter(range);
  };

  return (
    <main className="page">
      <Header
        onSelectHp={handleSelection}
        onSelectRange={handleRangeSelection}
        selectedHp={selectedHp}
        selectedRange={selectedRange}
      />
      {filter && <CardList hp={filter} />}
    </main>
  );
}
