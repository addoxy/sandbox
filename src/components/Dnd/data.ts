import { v4 as uuidv4 } from "uuid";

export const boards = [
  {
    id: uuidv4(),
    title: "Refactoring UI",
    columns: [
      {
        id: uuidv4(),
        title: "Todo",
        cards: [
          {
            id: uuidv4(),
            content:
              "Learn the principle of spacing, and implement it in a project.",
          },
          {
            id: uuidv4(),
            content: "Finish reading the book.",
          },
          {
            id: uuidv4(),
            content:
              "Make a full-stack kanban board project and implement an icon picker and color picker in it.",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "In Progress",
        cards: [
          {
            id: uuidv4(),
            content:
              "Learn the principle of spacing, and implement it in a project.",
          },
          {
            id: uuidv4(),
            content: "Finish reading the book.",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Done",
        cards: [
          {
            id: uuidv4(),
            content:
              "Learn the principle of spacing, and implement it in a project.",
          },
        ],
      },
    ],
  },
];
