import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie, G2 } from "@ant-design/plots";

const DemoPie = () => {
  const G = G2.getEngine("canvas");
  const data = [
    {
      type: "Vegetables",
      value: 180,
    },
    {
      type: "Fish",
      value: 200,
    },
    {
      type: "Grocery",
      value: 350,
    },
    {
      type: "Meat",
      value: 130,
    },
    {
      type: "Spice",
      value: 100,
    },
  ];
  const cfg = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,

            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  const config = cfg;
  return <Pie {...config} />;
};

export default DemoPie;
