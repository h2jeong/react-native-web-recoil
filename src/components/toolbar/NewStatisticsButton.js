import React from "react";
import NewItemButton from "./NewItemButton";
import StatisticsIcon from "../icons/Statistics";

export default function NewStatisticsButton({ style, ...others }) {
  const newShapeProps = {
      type: 'statistics',
      width: 100,
      height: 100,
      status: 'loading',
      label: ''
  };

  return (
    <NewItemButton
      {...others}
      style={style}
      Icon={StatisticsIcon}
      title="Drag to create a new Statistic"
      newShapeProps={newShapeProps}
    />
  );
}
