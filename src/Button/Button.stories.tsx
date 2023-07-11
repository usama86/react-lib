import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { ButtonComponent } from "./index";

const stories = storiesOf("Button", module);
stories.add("Button", () => {
  const [value, setValue] = useState("Hello");
  const setChange = () => {
    setValue(value === "Hello" ? "Bye" : "Hello");
  };
  return <ButtonComponent onClick={setChange}>{value}</ButtonComponent>;
});
