
/**@typedef {import("./JIF.js")} JIF*/
/**@typedef {import("./NWS.js")} NWS*/
/**@type {JIF&NWS} */
module.exports=(function(){
    Object.assign(this,require("./JIF.js"))
    Object.assign(this,require("./NWS.js"))
    return this;
})();