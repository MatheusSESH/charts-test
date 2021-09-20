"use strict";
exports.__esModule = true;
var react_1 = require("react");
var victory_1 = require("victory");
var PageContent = function () {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    // setData(jsonValue)
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("ol", { className: "color-catalog" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("li", null),
                react_1["default"].createElement("span", null, "Galp\u00E3o primario")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("li", null),
                react_1["default"].createElement("span", null, "Galp\u00E3o secundario")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("li", null),
                react_1["default"].createElement("span", null, "Sala administra\u00E7\u00E3o")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("li", null),
                react_1["default"].createElement("span", null, "Ala de montagem")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("li", null),
                react_1["default"].createElement("span", null, "Patio de manuten\u00E7\u00E3o")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("li", null),
                react_1["default"].createElement("span", null, "Sala de tecnologia"))),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "chart-pie" },
                react_1["default"].createElement(victory_1.VictoryPie, { data: [1, 2, 3, 4, 5, 6], colorScale: ['green', 'orange', 'blue', 'purple', 'red', 'black'] })),
            react_1["default"].createElement("div", { className: "chart-bar" },
                react_1["default"].createElement(victory_1.VictoryChart, { domainPadding: 80 },
                    react_1["default"].createElement(victory_1.VictoryBar, { alignment: "middle", style: {
                            data: { fill: function (_a) {
                                    var index = _a.index;
                                    return (index === 0 ? "green" : '' ||
                                        index === 1 ? "orange" : '' ||
                                        index === 2 ? "blue" : '' ||
                                        index === 3 ? "purple" : '' ||
                                        index === 4 ? "red" : '' ||
                                        index === 5 ? "black" : '');
                                } }
                        }, data: [
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 6 },
                            { x: 6, y: 6 }
                        ], width: 30, height: 30, labels: function (d) { return d.index; } }),
                    "} />",
                    react_1["default"].createElement(victory_1.VictoryAxis, { crossAxis: false }))))));
};
exports["default"] = PageContent;
