import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import data from "./cal-data.json";

const HeatMap = () => {
  return (
    <div className="p-10">
      <h3 className=" w-full flex justify-between items-center">
        <span className="text-xl font-bold uppercase">CIPHER MAP</span>
      </h3>
      <CalendarHeatmap
        startDate={new Date("2021-12-31")}
        endDate={new Date()}
        values={data}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
};

export default HeatMap;
