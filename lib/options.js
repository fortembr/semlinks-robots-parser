"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnType = exports.LineType = void 0;
var LineType;
(function (LineType) {
    LineType["comment"] = "comment";
    LineType["userAgent"] = "user-agent";
    LineType["allow"] = "allow";
    LineType["disallow"] = "disallow";
    LineType["sitemap"] = "sitemap";
    LineType["crawlDelay"] = "crawl-delay";
    LineType["blank"] = "blank";
    LineType["other"] = "other";
})(LineType = exports.LineType || (exports.LineType = {}));
var ReturnType;
(function (ReturnType) {
    ReturnType["console"] = "console";
    ReturnType["browser"] = "browser";
})(ReturnType = exports.ReturnType || (exports.ReturnType = {}));
