"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var algoliasearch = require("algoliasearch");
function search() {
    var client = algoliasearch("FL3M3GOCWM", "dd6a2b1e5fdb9e5bc7773d4d43e2230f");
    var index = client.initIndex("user_dev");
    var deleteObjectP = index.deleteObject("test");
}
exports.search = search;
