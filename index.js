var Searches = require('searches');

var ConstraintSatisfactionEngine = {};

var defaultAreStatesEqual = function (a, b) {
    return a == b;
};

ConstraintSatisfactionEngine.solveProblem = function (state, getLegalActions, applyAction, isComplete, areStatesEqual) {
    if (areStatesEqual === undefined) {
        areStatesEqual = defaultAreStatesEqual;
    }

    var getPossibleSubsequentStates = function (state) {
        var stateHeuristicPairs =  getLegalActions(state).map(function (action) {
            var resultState = applyAction(action, state);
            return {state: resultState, heuristic: 0};
        });

        // TODO: Order these based on heuristics
        stateHeuristicPairs.sort(function (a, b) {
            return a.heuristic > b.heuristic;
        });

        return stateHeuristicPairs.map(function(pair) {
            return pair.state;
        });
    };

    var searchResult = Searches.DepthFirst.runSearch(state, isComplete, getPossibleSubsequentStates, areStatesEqual);

    return prepareResult(searchResult);
};

var prepareResult = function (searchResult) {
    return searchResult;
};

module.exports = ConstraintSatisfactionEngine;