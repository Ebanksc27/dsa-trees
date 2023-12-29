/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    return this._minDepthHelper(this.root);
  }

  _minDepthHelper(node) {
    if (!node) return Infinity;
    if (!node.left && !node.right) return 1;
    return 1 + Math.min(this._minDepthHelper(node.left), this._minDepthHelper(node.right));
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    return this._maxDepthHelper(this.root);
  }

  _maxDepthHelper(node) {
    if (!node) return 0;
    return 1 + Math.max(this._maxDepthHelper(node.left), this._maxDepthHelper(node.right));
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    this.globalMax = -Infinity;
    this._maxSumHelper(this.root);
    return this.globalMax;
  }

  _maxSumHelper(node) {
    if (!node) return 0;
    let leftMax = Math.max(0, this._maxSumHelper(node.left));
    let rightMax = Math.max(0, this._maxSumHelper(node.right));
    this.globalMax = Math.max(this.globalMax, node.val + leftMax + rightMax);
    return node.val + Math.max(leftMax, rightMax);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    this.nextLargerResult = null;
    this._nextLargerHelper(this.root, lowerBound);
    return this.nextLargerResult;
  }

  _nextLargerHelper(node, lowerBound) {
    if (!node) return;
    if (node.val > lowerBound && 
       (this.nextLargerResult === null || node.val < this.nextLargerResult)) {
      this.nextLargerResult = node.val;
    }
    this._nextLargerHelper(node.left, lowerBound);
    this._nextLargerHelper(node.right, lowerBound);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) 

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. 

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. 

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree.

  lowestCommonAncestor(node1, node2) {
    
  }
}
**/