import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ResetButton from "../components/ResetButton";

export default {
  title: "Components/ResetButton",
  component: ResetButton,
  argTypes: {
    difficulty: {
      control: { type: "radio" },
      options: ["easy", "medium", "hard"],
    },
    resetGame: { action: "resetGame clicked" },
  },
} as Meta<typeof ResetButton>;

const Template: StoryFn<typeof ResetButton> = (args) => <ResetButton {...args} />;

export const Easy = Template.bind({});
Easy.args = {
  difficulty: "easy",
};

export const Medium = Template.bind({});
Medium.args = {
  difficulty: "medium",
};

export const Hard = Template.bind({});
Hard.args = {
  difficulty: "hard",
};
