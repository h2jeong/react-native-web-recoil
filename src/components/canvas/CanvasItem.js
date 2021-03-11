import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedIdsState } from "../../recoil/atoms";
import { itemWithId } from "../../recoil/selectors";
import { createShape } from "../shapes";
import useMove from "../../hooks/useMove";
import { useUpdateItem } from "../../recoil/hooks";

export default function CanvasItem({ id }) {
  const [itemSnapshot, setItemSnapshot] = useState(null);
  const itemState = useRecoilValue(itemWithId(id));
  const setSelectedIds = useSetRecoilState(selectedIdsState);
  const updatePosition = useUpdateItem();

  const { onMouseDown } = useMove(({ status, origin, offset }) => {
    if (status === "start") setItemSnapshot(itemState);
    if (status === "moving" && itemSnapshot) {
      updatePosition({
        ...itemSnapshot,
        x: itemSnapshot.x + offset.x,
        y: itemSnapshot.y + offset.y,
      });
    }
    if (status === "end") {
      setItemSnapshot(null);
      setSelectedIds((ids) => {
        if (origin.metaKey || origin.shiftKey) return [...ids, id];
        return [id];
      });
    }
  });
  const Shape = createShape(itemState);
  if (!Shape) return null;

  return <Shape {...itemState} onMouseDown={onMouseDown} />;
}
