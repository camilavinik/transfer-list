import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Transfer List App", () => {
  let leftList;
  let rightList;
  let transferRightButton;
  let transferLeftButton;

  beforeEach(() => {
    render(<App />);

    const leftListContainer = screen.getByTestId("left-list-container");
    const rightListContainer = screen.getByTestId("right-list-container");
    leftList = within(leftListContainer).getByTestId("single-list");
    rightList = within(rightListContainer).getByTestId("single-list");

    const transferControls = screen.getByTestId("transfer-controls-container");
    transferRightButton =
      within(transferControls).getByTestId("transfer-right");
    transferLeftButton = within(transferControls).getByTestId("transfer-left");
  });

  test("Should render all essential components", () => {
    expect(screen.getByTestId("transfer-list-title")).toBeInTheDocument();
    expect(leftList).toBeInTheDocument();
    expect(transferRightButton).toBeInTheDocument();
    expect(transferLeftButton).toBeInTheDocument();
    expect(rightList).toBeInTheDocument();
  });

  test("Initial left list should have 5 items", () => {
    expect(leftList.children.length).toBe(4);
  });

  test("Initial right list should be empty", () => {
    expect(rightList.children.length).toBe(0);
  });

  test("Should transfer a single item from left to right list", () => {
    const firstItem = leftList.children[0];

    fireEvent.click(firstItem);
    fireEvent.click(transferRightButton);

    expect(leftList.children.length).toBe(3);
    expect(rightList.children.length).toBe(1);
  });

  test("Should transfer all items from left to right list", () => {
    const allItems = Array.from(leftList.children);

    allItems.forEach((item) => fireEvent.click(item));
    fireEvent.click(transferRightButton);

    expect(leftList.children.length).toBe(0);
    expect(rightList.children.length).toBe(4);
  });

  test("Should transfer some items from left to right list", () => {
    const firstItem = leftList.children[0];
    const thirdItem = leftList.children[2];

    fireEvent.click(firstItem);
    fireEvent.click(thirdItem);
    fireEvent.click(transferRightButton);

    expect(leftList.children.length).toBe(2);
    expect(rightList.children.length).toBe(2);
  });

  test("Should transfer a single item from right to left list", () => {
    const leftFirstItem = leftList.children[0];

    fireEvent.click(leftFirstItem);
    fireEvent.click(transferRightButton);

    const rightFirstItem = rightList.children[0];

    fireEvent.click(rightFirstItem);
    fireEvent.click(transferLeftButton);

    expect(leftList.children.length).toBe(4);
    expect(rightList.children.length).toBe(0);
  });
});
