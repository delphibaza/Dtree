// Import of the module dree
const dree = require("dree");
// The path of the folder you wanna inspect
const path = "./root";
// Using dree, I get the object representing the directory tree
const tree = dree.scan(path);

// A function to pass from the dree object to the object you want
function parseTree(tree, currentDir) {
  if (tree.type === "directory") {
    const name = tree.name;
    const result = [name];
    for (let child of tree.children) {
      parseTree(child, result);
    }
    result.push([]);

    if (currentDir === undefined) {
      return result;
    } else {
      currentDir.push(result);
    }
  }
}

// I use that function to get the result
const result = parseTree(tree);
// I get a string to show how was the directory tree on the web page
const text = dree.parse(path);
// I export everything
module.exports = { result, text };
