[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/26dp6wek)
# Asynchronicity

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/26dp6wek)

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

### Answer

The time complexity of my implementation is $\Theta(n)$ where n is the length of the array. This is because the implementation iterates over the array once and performs a constant amount of work for each element assuming EVERY element is equal to the key. There are no nested loops or recursive calls, just the same operation occuring asynchronously accross $n$ elements.

### logic

1) The function while using callbacks and executing asynchronously, only iterates through each element of the array one time.
2) for each element, it performs a constant number of operations (checking if the element is equal to the key and incrementing the count if it is equl).
3) because of "2)" the complexity is linear, scaling with the number of elements in the array or $n$
4) therfore, worst case the key is every value in the array, the time complexity is $\Theta(n)$ as each element is processed once in constant time and there are $n$ such elements.
