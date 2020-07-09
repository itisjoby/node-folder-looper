function getPath(obj, value) {
    if (obj.constructor !== Object) {
        throw new TypeError('getPath() can only operate on object with Object as constructor');
    }
    var path = [];
    var found = false;

    function search(haystack) {
        for (var key in haystack) {
            path.push(key);
            if (haystack[key] === value) {
                found = true;
                break;
            }
            if (haystack[key].constructor === Object) {
                search(haystack[key]);
                if (found) break;
            }
            if (haystack[key].constructor === Array) {
                search(haystack[key]);
                if (found) break;
            }

            path.pop();
        }
    }

    search(obj);
    return path;
    /*
    Or alternately if you want to keep mixed return
    return found ? path : false;
    */
}

var nestedObj = {
    "E:": {
        "FOLDER1": [
            {}, {
                "FOLDER 2": {
                    1: 30009463
                },
                "FOLDER 3": {
                    1: 30010338
                },
                "FOLDER 1": {
                    1: 30007744
                },
                "FOLDER 4": {
                    1: 30018363,
                    2: 30017133,
                    3: 30013107
                },
                "FOLDER 5": {
                    1: 30011707,
                    2: 30017137
                },
                "FOLDER 6": {
                    1: 30012329
                },
                "FOLDER 7": {
                    1: 30017137
                }
            }]
    }
};

console.log(getPath(nestedObj, 'FOLDER 1'));
console.log(getPath(nestedObj['FOLDER 1'], 'FOLDER 1'));
