# JavaScript Null Handling in Arithmetic Operations

This repository demonstrates a common error in JavaScript when performing arithmetic operations with null values and how to handle them correctly. 

The file `bug.js` showcases the incorrect implementation that leads to `NaN` when a null value is encountered during addition. The file `bugSolution.js` provides the corrected version, demonstrating how to effectively handle null values to prevent unexpected results.

## Bug Description
In JavaScript, adding a number to `null` results in `NaN` (Not a Number).  The `bug.js` example illustrates this scenario, which can lead to unexpected behavior and errors in applications. 

## Solution
The correct approach involves explicitly checking for `null` values and handling them accordingly, such as by returning `null` or using a default value. The `bugSolution.js` example demonstrates this robust approach.
