import type { Meta, StoryObj } from "@storybook/react";
import PlayerInfo from "../components/PlayerInfo";

const meta: Meta<typeof PlayerInfo> = {
  title: "Components/PlayerInfo",
  component: PlayerInfo,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    correctAnswers: { control: "number" },
    timeLeft: { control: "number" },
    gameOver: { control: "boolean" },
    align: {
      control: "radio",
      options: ["left", "center", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlayerInfo>;

const getTimeClass = (timeLeft: number) => {
  if (timeLeft <= 5) return "text-red-600 animate-bounce";
  if (timeLeft <= 10) return "text-red-500 animate-pulse";
  return "text-black";
};

// Default Player
export const Default: Story = {
  args: {
    name: "Player 1",
    correctAnswers: 3,
    timeLeft: 20,
    gameOver: false,
    getTimeClass,
    align: "center",
  },
};

// Player with Low Time Left
export const LowTimeLeft: Story = {
  args: {
    ...Default.args,
    timeLeft: 4, // Less than 5s, should bounce
  },
};

// Player with Time Up
export const TimeUp: Story = {
  args: {
    ...Default.args,
    timeLeft: 0,
    gameOver: true,
  },
};

// Right-aligned Player
export const RightAligned: Story = {
  args: {
    ...Default.args,
    align: "right",
  },
};

// Left-aligned Player
export const LeftAligned: Story = {
  args: {
    ...Default.args,
    align: "left",
  },
};
