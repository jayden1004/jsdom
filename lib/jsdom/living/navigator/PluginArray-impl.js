"use strict";

const idlUtils = require("../generated/utils");

exports.implementation = class PluginArray {
  refresh() {
    return {"name":"refresh"}
  }

  get length() {
    return 0;
  }

  item() {
    return {"name":"item"};
  }

  namedItem() {
    return {"name":"namedItem"};
  }

  get [idlUtils.supportedPropertyIndices]() {
    return [];
  }
};
