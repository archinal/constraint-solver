# Constraint Solver #
This is a generic solver of constraint satisfaction problems written in JavaScript.

Constraint satisfaction problems take a number of different forms, including:
* Sudoku Problems
* The n-Queen Problem

### Parameters ###
* `state` - The original state of the problem.
* `getLegalActions` - A function that, given a `state` object, returns an array of `action` objects that can be supplied to `applyAction`
* `applyAction` - A function that, given an `action` object and a `state` object, returns a new `state` object that
represents the state that follows after applying the action. This function should not change the original input `state` variable.
* `isComplete` - A function that, given a `state` object, tells us if it represents the goal state.
* [Optional] `areStatesEqual` - A function that, given two states, tells us if they're equal. If this function isn't provided, the comparator `==` is used.

### Return Values ###
Return...

### Example Usage ###
```
// CommonJS Style import
var ConstraintSolver = require('constraint-solver');

var result = ConstraintSatisfactionEngine.solveProblem(state, getLegalActions, applyAction, isComplete, areStatesEqual);
```