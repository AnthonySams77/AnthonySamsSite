import React, { Component } from "react";
import Node from "./node";

class LinkedList extends Component {
  state = {
    first,
    last
  };

  addFirst(value) {
    if (this.first === null) {
      this.first = this.last = node;
    }

    node = Node(value, first);
    this.first = node;
  }

  addLast(value) {
    node = Node(value, null);

    if (first === null) this.first = this.last = node;
    else {
      this.last.next = node;
      this.last = node;
    }
  }

  deleteFirst() {
    first = this.first.next;
  }

  deleteLast() {
    current = this.first;
    last;

    while (current.next !== null) {
      current = current.next;
      last = current;
    }
    this.last = last;
  }

  contains(value) {
    current = this.first;
    while (value !== current.value) {
      current = current.next;
    }
    if (current.value === value) {
      return true;
    } else {
      return false;
    }
  }

  indexOf(value) {
    current = this.first;
    count = 0;
    while (value !== current.value) {
      current = current.next;
      count++;
    }
    if (current.value === value) {
      return count;
    } else {
      return -1;
    }
  }

  reverse() {
    last = this.first;
    this.first = this.last;
    this.last = last;
    prevNode;
    while (last.next) {
      prevNode = last.next;
      prevNode.next = last;
      last = prevNode;
    }
  }

  getKthNodeFromEnd(k) {
    k--;
    current = this.first;
    previousK;
    while (current.next) {
      previoustK = current;
      for (i = 0; k > i; i++) {
        current = current.next;
      }
    }
    return previousK;
  }

  // getKthNodeFromEnd(k) {
  //   k--;
  //   current;
  //   previousK = this.first;
  //   count;
  //   while (previousK.next) {
  //     current = previousK.next;
  //     for (i = k; k > i; i++) {
  //       current = previousK.next;
  //     }
  //     current = previousK.next;
  //   }
  //   return current;
  // }

  render() {
    return <div></div>;
  }
}

export default LinkedList;
