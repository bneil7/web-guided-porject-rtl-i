import React from "react";
import { render } from "@testing-library/react"; // to render components in a virtual DOM
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

})








































////FIRST TEST////
// function breakTheTest(someValue){
//     if(someValue === true){
//         // do nothing!
//     } else {
//     throw new Error("this test failed because we threw an error inside 'breakTheTest()'")
//     }
// }