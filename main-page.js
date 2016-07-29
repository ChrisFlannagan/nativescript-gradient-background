/**
 * Created by Chris on 7/29/16.
 *
 * Example of a page's .js file
 * uses function linearGradient to add a background gradient
 * from js function file grad-bg.js
 *
 */

var viewModule = require("ui/core/view");
var page;
var gradients = require("~/grad-bg.js")


exports.loaded = function(args) {
    page = args.object;
    gradients.linearGradient(page, "support-btn", ['#ef706d', '#934544']);
};
