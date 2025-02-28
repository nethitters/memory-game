import type { Meta, StoryObj } from "@storybook/react";
import DifficultySelector from "../components/DifficultySelector";

const meta: Meta<typeof DifficultySelector> = {
  title: "Components/DifficultySelector",
  component: DifficultySelector,
  tags: ["autodocs"],
  argTypes: {
    difficulty: {
      control: "radio",
      options: ["easy", "medium", "hard"],
    },
    onDifficultyChange: { action: "difficultyChanged" },
  },
};

export default meta;
type Story = StoryObj<typeof DifficultySelector>;

// Default Difficulty (Medium)
export const Default: Story = {
  args: {
    difficulty: "medium",
  },
};

// Easy Difficulty Selected
export const Easy: Story = {
  args: {
    difficulty: "easy",
  },
};

// Hard Difficulty Selected
export const Hard: Story = {
  args: {
    difficulty: "hard",
  },
};
