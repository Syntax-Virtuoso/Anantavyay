# Developer Documentation

## Overview
This documentation outlines the approach and key components used in the lexer and AST generation process, along with optimization strategies.

---

## Approach

### 1. Lexer and Basic AST Tree

We will **combine the lexer and the basic AST generator** to optimize performance.

- **Lexer**: The lexer scans the source code character by character, breaking it down into tokens. It uses a **finite state machine** to recognize patterns for each token type. 
  - **Time Complexity**: The lexer runs in **O(n)** time complexity, where `n` is the number of characters in the input. This ensures efficient, single-pass tokenization.

- **Basic AST**: The generated tokens are directly mapped into a basic Abstract Syntax Tree (AST). The focus is on ensuring that token arrangements are handled efficiently within the AST function.

#### Summary of Lexer Process:
- Tokenizes input in a single pass
- Generates an intermediate AST
- Uses finite state machine for pattern matching

---

### 2. Optimizer

The **Optimizer** will transform the basic AST into a more efficient, optimized representation. This stage focuses on reducing unnecessary complexity and improving performance without changing the semantics of the code.

---

## Key Considerations

- **Performance**: Both the lexer and AST generation are designed for high performance, keeping time complexity to a minimum.
- **Maintainability**: The integration of the lexer and AST generation in one function simplifies maintenance and reduces the risk of errors.

---

## Future Work

- **Advanced Optimization**: Further work will involve optimizing the AST for execution speed.
- **Error Handling**: Adding better error detection and reporting throughout the lexer and AST construction phases.

## Stuff Done

We have added the basic implementation of the lexer, which tokenizes the keywords and symbols that will be used in the code. It is not complete, but the basic idea has been added.