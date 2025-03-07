import Goal from "./Goal";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Goal> = {
  title: "views/notes/Goal",
  component: Goal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Goal>;

export const Default: Story = {
  render: () => <Goal goal="자바스크립트로 웹 서비스 만들기" />,
};
