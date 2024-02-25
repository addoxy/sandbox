interface CardProps {
  id: string;
  content: string;
}

const Task = (props: CardProps) => {
  const { content } = props;
  return (
    <div className="flex w-full cursor-pointer flex-col rounded-lg border border-zinc-600/20 bg-zinc-700/50 p-4">
      <p className="font-light text-zinc-200">{content}</p>
    </div>
  );
};

export default Task;
