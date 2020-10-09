/*
 * @Author: dapeng
 * @Date: 2020-10-09 14:50:10
 * @LastEditors: dapeng
 * @LastEditTime: 2020-10-09 15:12:31
 */
/* eslint-disable */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./button";

const defaultProps = {
  onClick: jest.fn(),
};
describe("test button component", () => {
  it("should render the corrent default button", () => {
    const wrapper = render(<Button {...defaultProps}>testing</Button>);
    const element = wrapper.getByText("testing");

    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("National-btn");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
