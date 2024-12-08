# Dev Docs
### Approach🛣️
##### Lexer and Basic AST Tree
We will combine the lexer and basic AST generator for better performance.

The lexer will break down the input code into tokens by scanning the source code character by character. We will use a finite state machine to match patterns for each token type. The time complexity target will be O(n), as we are only scanning the input once to generate tokens.

The tokens will be in the terms of AST tree only so that there is only arrangement in basic AST tree function.

##### Optimiser