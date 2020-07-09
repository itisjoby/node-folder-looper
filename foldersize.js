var fs = require('fs');
var path = require('path');

var readFile = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) { return done(err); }

        var pending = list.length;
        if (!pending) { return done(null, results); }
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    readFile(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};
let filess = [];
// test it out on home directory
//readFile('E:/', function (err, results) {
// if (err) throw err;
//  console.log(results);
//});
looper({}, 'E:\\abc\\01 - Dare La La La.m4a')
looper({}, 'E:\\abc\\01 - Dare La La La.m4a')

function looper(file_object, file_name) {
    var res = file_name.split("\\");
    let file_collection = {};
    for (let i = (res.length - 1); i > 0; i--) {


        if (i == 1) {
            if (!filess['E:']) {

                filess['E:'] = [JSON.parse(JSON.stringify(file_collection))];
                break;
            }
            filess['E:'].push(JSON.parse(JSON.stringify(file_collection)))
        }

        file_collection[res[i - 1]] = [];
        if (i == (res.length - 1)) {
            file_collection[res[i]] = [];
            file_collection[res[i]].push({ 'name': res[i], size: '50kb' });
        }

        if (file_collection[res[i]]) {

            file_collection[res[i - 1]].push({ "name": res[i], 'data': JSON.parse(JSON.stringify(file_collection[res[i]][0])) });
        }

        delete file_collection[res[i]];


    }

}
console.log(filess)

function objectCreator(arrayofpath) {
    collection_till_now = [];
    for (val in arrayofpath) {
        let current = arrayofpath[key];
        let next = arrayofpath[key + 1];

        if (colection.isempty()) {
            colection.push({ current: [] });
            colection['0'].current.push({ next: [] });
            collection_till_now.push(current, 0, next)
        }
        else {
            collection_till_now.push(current, 0, next)

            val.collectuiontull

            let currents_path = getPath(colection, current);
            currents_path.push({ next: [] });


        }
    }
}


function resolve(path, obj = self, separator = '.') {
    var properties = Array.isArray(path) ? path : path.split(separator)
    return properties.reduce((prev, curr) => prev && prev[curr], obj)
}


//let a = resolve("part3.0", someObject);
//a.size = 9;
//console.log(someObject)