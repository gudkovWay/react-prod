import { render, screen } from "@testing-library/react";

import { Button, ButtonTheme } from "./Button";

describe("button", () => {
  test("test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("test render via add themes", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
