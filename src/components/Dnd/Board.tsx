"use client";

import { useMemo } from "react";
import BoardDropdownMenu from "./BoardDropdownMenu";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

// random comment

interface BoardProps {
  id: string;
  title: string;
  columns: ColumnProps[];
}

interface CardProps {
  id: string;
  content: string;
}

interface ColumnProps {
  id: string;
  title: string;
  cards: CardProps[];
}

const Board = (props: BoardProps) => {
  const { title, columns } = props;
  const columnsId = useMemo(
    () => columns.map((column) => column.id),
    [columns]
  );
  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex items-center justify-between">
        <BoardDropdownMenu />
      </div>
      <DndContext>
        <div className="right no-scrollbar -ml-8 -mr-8 grid auto-cols-min grid-flow-col gap-x-5 overflow-auto">
          <SortableContext items={columnsId}>
            {columns.map((column) => (
              <Column
                key={column.id}
                id={column.id}
                title={column.title}
                cards={column.cards}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default Board;
