import ColumnDropdownMenu from "./ColumnDropdownMenu";
import Task from "./Task";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface CardProps {
  id: string;
  content: string;
}

interface ColumnProps {
  id: string;
  title: string;
  cards: CardProps[];
}

const Column = (props: ColumnProps) => {
  const { id, title, cards } = props;

  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: id,
      data: {
        type: "Column",
        title,
        cards,
      },
    });

  const style = { transition, transform: CSS.Transform.toString(transform) };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex w-96 flex-col rounded-xl border border-zinc-700/30 bg-zinc-800 px-5 pb-8 pt-4 first-of-type:ml-8 last-of-type:mr-8"
    >
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          defaultValue={title}
          className="mr-4 w-full overflow-hidden text-ellipsis whitespace-nowrap bg-inherit text-xl font-medium text-zinc-300 outline-none"
        ></input>
        <ColumnDropdownMenu />
      </div>
      <div className="flex flex-col gap-y-3">
        {cards.map((card) => (
          <Task key={card.id} id={card.id} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Column;
