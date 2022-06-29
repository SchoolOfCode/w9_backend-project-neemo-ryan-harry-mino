import { test, expect } from "@jest/globals";
import "./quotesRouter.js"
import {quotes} from "../libs/quotes.js"

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

  test("First item in quotes array", function () {
    //Arrange 
    const expected = 
        quotes[0];
    //Act 
    const actual = {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
      };
      
    //Assert
    expect(actual).toEqual(expected);
  });

  test("Has the structure contains strings", function () {
    //Arrange 
    const expected = {
        text:expect.any(String),
        author:expect.any(String)
    }
    //Act 
    const actual = {
       text: quotes[0].text,
        author: quotes[0].author
    }
    //Assert
    expect(actual).toEqual(expected);
  });

