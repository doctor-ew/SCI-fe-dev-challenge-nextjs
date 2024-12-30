"use client";
import React, { useState, useEffect } from "react";

type DropdownProps = {
  onSelect: (selectedValue: string) => void;
  selectedValue: string;
};

export default function Dropdown({ onSelect, selectedValue }: DropdownProps) {
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOptions() {
      try {
        const res = await fetch("/api/catalog");
        if (!res.ok) throw new Error("Failed to fetch dropdown options");
        const result = await res.json();
        const filteredOptions = result.data.filter(
          (option: string) => !option.includes("+")
        );
        setOptions(filteredOptions);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    }
    fetchOptions();
  }, []);

  return (
    <div className="flex flex-row items-center gap-2">
      {/* Label */}
      <label className="text-sm font-semibold text-yellow-500">HP:</label>

      {/* Dropdown */}
      {loading && <p className="text-sm text-gray-600">Loading options...</p>}
      {error && <p className="text-sm text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <select
          className="w-32 px-2 py-1 text-sm text-gray-400 dark:text-gray-400 border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          value={selectedValue}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="">Select HP</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
