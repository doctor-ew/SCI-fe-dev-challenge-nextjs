"use client";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import RangePicker from "../RangePicker/RangePicker";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

type HeaderProps = {
  onSelectHp: (hp: string) => void;
  onSelectRange: (range: string) => void;
  selectedHp: string;
  selectedRange: string;
};

export default function Header({
  onSelectHp,
  onSelectRange,
  selectedHp,
  selectedRange,
}: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;

    if (isDarkMode) {
      // Light mode
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--foreground-color", "#1a1a1a");
      root.style.setProperty("--card-container-bg-color", "#fff");
    } else {
      // Dark mode
      root.style.setProperty("--background-color", "#1d1d1d");
      root.style.setProperty("--foreground-color", "#f8f9fa");
      root.style.setProperty("--card-container-bg-color", "#1d1d1d");
    }
    root.classList.toggle("dark");
  };

  return (
    <header className="flex flex-col items-center gap-6 p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2d2d2d]">
      <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-200">
        Card Browser
      </h1>

      <div className="flex flex-row items-center gap-4">
        <Dropdown onSelect={onSelectHp} selectedValue={selectedHp} />
        <RangePicker
          onRangeSelect={onSelectRange}
          selectedRange={selectedRange}
        />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <SunIcon className="w-6 h-6 text-yellow-500 dark:text-orange-500" />
        <label
          htmlFor="theme"
          className="relative inline-flex items-center cursor-pointer"
        >
          <input
            id="theme"
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <div className="w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full transition duration-300 flex items-center">
            <div
              className={`w-6 h-6 bg-white dark:bg-gray-500 rounded-full transform transition-transform duration-300 ${
                isDarkMode ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </div>
        </label>
        <MoonIcon className="w-6 h-6 text-gray-500 dark:text-gray-200" />
      </div>
    </header>
  );
}
