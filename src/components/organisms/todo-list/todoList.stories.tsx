import { InputModalProvider } from "@/contexts/InputModalContext";
import { sampleTodos } from "@/mocks/todo/todoMockData";

import TodoList from "./TodoList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoList> = {
  title: "components/organisms/TodoList",
  component: TodoList,
  decorators: [
    (Story) => (
      <InputModalProvider>
        <Story />
      </InputModalProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    data: sampleTodos,
    handleToggleTodo: () => {},
  },
};
