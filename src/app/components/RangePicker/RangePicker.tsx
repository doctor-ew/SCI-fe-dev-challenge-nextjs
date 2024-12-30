"use client";
import React, { useState, useEffect } from "react";

type RangePickerProps = {
  onRangeSelect: (range: string) => void;
  selectedRange: string;
};

export default function RangePicker({ onRangeSelect, selectedRange }: RangePickerProps) {
  const [minHp, setMinHp] = useState<string>("");
  const [maxHp, setMaxHp] = useState<string>("");

  useEffect(() => {
    if (!selectedRange) {
      setMinHp("");
      setMaxHp("");
    }
  }, [selectedRange]);

  const handleRangeChange = () => {
    if (minHp && maxHp) {
      onRangeSelect(`${minHp}-${maxHp}`);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <label className="text-sm font-semibold text-yellow-500">Min HP:</label>
      <input
        type="number"
        value={minHp}
        onChange={(e) => setMinHp(e.target.value)}
        placeholder="Min HP"
        className="w-20 px-2 py-1 text-sm border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      <label className="text-sm font-semibold text-yellow-500">Max HP:</label>
      <input
        type="number"
        value={maxHp}
        onChange={(e) => setMaxHp(e.target.value)}
        placeholder="Max HP"
        className="w-20 px-2 py-1 text-sm border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      <button
        onClick={handleRangeChange}
        className="px-4 py-2 text-sm font-semibold text-yellow-600 bg-transparent border border-yellow-400 rounded-md hover:bg-yellow-500 hover:text-white"
      >
        Set Range
      </button>
    </div>
  );
}
