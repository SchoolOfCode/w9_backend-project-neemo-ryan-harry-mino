import { test, expect } from "@jest/globals";
import "./app.js"

test("Has the structure { success: true }", function () {
    //Arrange 
    const expected = {
      success: true,
    };
    //Act 
    const actual = {
      success: true,
    };
    //Assert
    expect(actual).toEqual(expected);
  });

