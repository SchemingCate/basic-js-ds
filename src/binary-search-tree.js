const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }

    const addInternally = (parentNode) => {
      if (data < parentNode.data) {
        if (parentNode.left) {
          addInternally(data, parentNode.left);
        } else {
          parentNode.left = new Node(data);
        }
      }
      if (data > parentNode) {
        if (parentNode.right) {
          addInternally(data, parentNode.right);
        } else {
          parentNode.right = new Node(data);
        }
      }
    };

    addInternally(this.rootNode);
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
