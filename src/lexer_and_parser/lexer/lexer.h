#ifndef LEXER_H
#define LEXER_H

// Token types
typedef enum {
    TOKEN_IDENTIFIER,
    TOKEN_KEYWORD,
    TOKEN_NUMBER,
    TOKEN_OPERATOR,
    TOKEN_STRING,
    TOKEN_COLON,
    TOKEN_ASSIGNMENT,
    TOKEN_ARROW,
    TOKEN_EOF
} TokenType;

// Token structure
typedef struct {
    TokenType type;
    char *lexeme;
} Token;

// Lexer functions
void init_lexer(const char *source);
Token *get_next_token();
void free_token(Token *token);
void cleanup_lexer();

#endif // LEXER_H
