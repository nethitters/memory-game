import type { Meta, StoryObj } from "@storybook/react";
import Card from "../components/Card";

// Storybook metadata
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    flipped: { control: "boolean" },
    matched: { control: "boolean" },
    image: { control: "text" },
    handleCardClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default (Face Down)
export const FaceDown: Story = {
  args: {
    uniqueId: 1,
    id: 1,
    image: "/images/card1.png",
    flipped: false,
    matched: false,
  },
};

// Flipped (Revealing Image)
export const Flipped: Story = {
  args: {
    uniqueId: 2,
    id: 2,
    image: "/images/card2.png",
    flipped: true,
    matched: false,
  },
};

// Matched Card
export const Matched: Story = {
  args: {
    uniqueId: 3,
    id: 3,
    image: "/images/card3.png",
    flipped: true,
    matched: true,
  },
};
