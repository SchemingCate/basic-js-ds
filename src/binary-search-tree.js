const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

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
          addInternally(parentNode.left);
        } else {
          parentNode.left = new Node(data);
        }
      }
      if (data > parentNode.data) {
        if (parentNode.right) {
          addInternally(parentNode.right);
        } else {
          parentNode.right = new Node(data);
        }
      }
    };

    addInternally(this.rootNode);
  }

  has(data) {
    const hasInternally = (parentNode) => {
      if (!parentNode) return false;

      if (data === parentNode.data) return true;
      if (data < parentNode.data) {
        return hasInternally(parentNode.left);
      }
      if (data > parentNode.data) {
        return hasInternally(parentNode.right);
      }
    };
    return hasInternally(this.rootNode);
  }

  find(data) {
    const findInternally = (parentNode) => {
      if (!parentNode) return null;

      if (data === parentNode.data) return parentNode;
      if (data < parentNode.data) {
        return findInternally(parentNode.left);
      }
      if (data > parentNode.data) {
        return findInternally(parentNode.right);
      }
    };

    return findInternally(this.rootNode);
  }

  remove(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) return null;
    const findMin = (parentNode) => {
      return !parentNode.left ? parentNode.data : findMin(parentNode.left);
    };
    return findMin(this.rootNode);
  }

  max() {
    if (!this.rootNode) return null;
    const findMax = (parentNode) => {
      return !parentNode.right ? parentNode.data : findMax(parentNode.right);
    };
    return findMax(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree,
};
