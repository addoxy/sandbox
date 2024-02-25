"use client";

import Board from "@/components/Dnd/Board";
import { boards } from "@/components/Dnd/data";

const DragAndDrop = () => {
  const board = boards[0];
  return <Board id={board.id} title={board.title} columns={board.columns} />;
};

export default DragAndDrop;
