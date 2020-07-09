import React from "react";
import { render, screen } from "@testing-library/react"; // to render components in a virtual DOM
import App from "./App"; // we need the component we are testing/rendering

// jest global functions to write our tests
// - test() function // used to run a test

// Jest is going to be our "test runner"

// test('title', cbToRunTheTest)
test('renders App component without errors', () => {
//   ^^^^^^^^^^^^^^^^title^^^^^^^^^^^^^^^^,  ^^^^^^^^anonymous callback function
    // render the App component
    render(<App/>);

    //tests will fail if an error is "thrown" from any function/component inside the test callback
    // breakTheTest(true);
});

//query the virtual DOM for an element and make an "assertion about that element"
test('App renders the form header', () => {
    // Arrange //
    // const oneProp = 'hi' <-- YOU CAN USE PROPS TO TEST ONE ELEMENT AT A TIME
    
    // const container =
    render(<App />);
    // console.log(container);

    // Act //
    // query for the header element
    const header = screen.getByText(/add new animal/i) //regex string /BACKSLASH/ , and i means case insensitive


    // Assert //
    // make an assertion (using Jest global functions)
    // an assertion is a boolean expression, written for evaluating the operation of a specific portion of your software. Think of it as a normal phrase you could say out loud to explain your intentions. 
    expect(header).toBeInTheDocument()
})








































////FIRST TEST////
// function breakTheTest(someValue){
//     if(someValue === true){
//         // do nothing!
//     } else {
//     throw new Error("this test failed because we threw an error inside 'breakTheTest()'")
//     }
// }