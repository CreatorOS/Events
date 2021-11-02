// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Event {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        // write logic to emit the Log event with the parameters of sender address and "Hello World" message 
        
        emit AnotherLog();
    }
}
