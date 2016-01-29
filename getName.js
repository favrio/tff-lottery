var fs = require("fs");
var path = require("path");
var imagePath = path.join(process.cwd(), "asset");

console.log(imagePath);
// return false;

function scanFolder(path) {
	var fileList = [],
		folderList = [],
		walk = function(path, fileList, folderList) {
			files = fs.readdirSync(path);
			files.forEach(function(item) {
				var tmpPath = path + '/' + item,
					stats = fs.statSync(tmpPath);

				if (stats.isDirectory()) {
					walk(tmpPath, fileList, folderList);
					folderList.push(tmpPath);
				} else {
					fileList.push({
						name: tmpPath.replace(/\.(jpg|png|jpeg)$/, "").replace(imagePath + "/", ""),
						img: tmpPath.replace(imagePath + "/", "")
					});
				}
			});
		};

	walk(path, fileList, folderList);

	console.log("扫描" + path + "成功");

	console.log(JSON.stringify(fileList));

	fs.appendFile("nameList.js", JSON.stringify(fileList));

	return {
		'files': fileList,
		'folders': folderList
	}
}

scanFolder(imagePath);