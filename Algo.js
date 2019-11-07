Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:


begin to intersect at node c1.

 

Example 1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let headALength = getNodeLength(headA)
    let headBLength = getNodeLength(headB)
    let nodeA = headA
    let nodeB = headB
    if(headALength > headBLength){
      let diff = headALength - headBLength
      nodeA = startNodeAt(headA, diff)
    }else if(headBLength > headALength){
      let diff = headBLength - headALength
      nodeB = startNodeAt(headB,diff)
    }
    
    while(nodeB != null && nodeA != null){
      if(nodeA === nodeB) return nodeA
      nodeB = nodeB.next
      nodeA = nodeA.next
    }    
    return null
};


function getNodeLength(node){
  let counter = 1
  let tNode = node
  while(tNode != null){
  counter++
    tNode = tNode.next
  }
  return counter
}

function startNodeAt(head,diff){
  let counter = 0
  let tNode = head
  while(tNode != null && counter < diff){
    counter++
    tNode = tNode.next
  }
  return tNode
}


