FormData.prototype.toObject = function(to_json = false) {
    /** @type { {[key:string]: any} } */
    let object = {};
    this.forEach((value, key) => (object[key] = value));
    return to_json ? JSON.stringify(object) : object;
};

export {}