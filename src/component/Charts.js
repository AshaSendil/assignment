import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

  const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize  charts
    const chart = echarts.init(chartRef.current);

    // Chart options are pointed below
    const options = {
      xAxis: {
        type: "category",
        data: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70],
          type: "bar",
        },
      ],
    };

    // Set chart options
    chart.setOption(options);

    // Resize chart based on window resized
    window.addEventListener("resize", () => {
      chart.resize();
    });

    // Clean up on unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={chartRef}
        style={{
          width: "80%",
          height: "80%",
          minWidth: "300px",
          minHeight: "300px",
        }}
      />
    </div>
  );
};

export default Chart