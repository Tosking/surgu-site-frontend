"use client";
import { useState } from "react";
import NewsCard from "./News/NewsCard";
import NewsCardBody from "./News/NewsCardBody";
import NewsCardTitle from "./News/NewsCardTitle";

interface EventItem {
  date: string;
  title: string;
}

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const events: EventItem[] = [
    { date: "03.02.2003", title: "" },
    { date: "03.02.2005", title: "" },
    { date: "03.02.2006", title: "" },
    { date: "03.02.2007", title: "" },
    { date: "03.02.2008", title: "Конкурс на зеленые технологии" },
    { date: "03.02.2009", title: "Конкурс на зеленые технологии" },
    { date: "03.02.2009", title: "Конкурс на зеленые технологии" },
    { date: "03.02.2009", title: "Конкурс на зеленые технологии" },
  ];

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < events.length - 2;
  console.log(currentIndex);
  const handleNext = () => {
    if (canScrollNext) {
      setCurrentIndex((prev) => prev + 1);
      setScrollPosition(((currentIndex + 1) / events.length) * 100);
    }
  };

  const handlePrev = () => {
    if (canScrollPrev) {
      setCurrentIndex((prev) => prev - 1);
      setScrollPosition(((currentIndex - 1) / events.length) * 100);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 gap-4"
          style={{
            transform: `translateX(-${scrollPosition}%)`,
            width: `${events.length * 385 + (events.length - 1)}px`,
          }}
        >
          {events.map((event, index) => (
            <div key={index} className="w-[385px] flex-shrink-0">
              <NewsCard className="border border-black rounded-[16px] min-h-[207px] justify-between">
                <NewsCardTitle type="Сотрудникам" date={event.date} />
                <NewsCardBody title={event.title || "Тест"} />
              </NewsCard>
            </div>
          ))}
        </div>
      </div>

      {/* Управление */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={!canScrollPrev}
            className={`p-2 rounded-lg ${
              canScrollPrev
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition-colors`}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={!canScrollNext}
            className={`p-2 rounded-lg ${
              canScrollNext
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition-colors`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
