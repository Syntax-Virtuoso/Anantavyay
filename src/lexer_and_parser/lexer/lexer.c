#include "lexer.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Lexer state
static const char *source_code;
static size_t position = 0;
static size_t length = 0;

// Keywords
const char *keywords[] = { "sheep", "fn", "return", NULL };

// Initialize lexer
void init_lexer(const char *source) {
    source_code = source;
    position = 0;
    length = strlen(source);
}

// Utility function: Check if a character is alphabetic or underscore
static int is_identifier_char(char c) {
    return isalnum(c) || c == '_';
}

// Utility function: Check if a word is a keyword
static int is_keyword(const char *word) {
    for (int i = 0; keywords[i] != NULL; i++) {
        if (strcmp(word, keywords[i]) == 0) {
            return 1;
        }
    }
    return 0;
}

// Helper to create a token
Token *create_token(TokenType type, const char *lexeme) {
    Token *token = (Token *)malloc(sizeof(Token));
    token->type = type;
    token->lexeme = strdup(lexeme);
    return token;
}

// Get next token
Token *get_next_token() {
    while (position < length) {
        char current = source_code[position];

        // Skip whitespace
        if (isspace(current)) {
            position++;
            continue;
        }

        // Identifier or keyword
        if (isalpha(current) || current == '_') {
            size_t start = position;
            while (position < length && is_identifier_char(source_code[position])) {
                position++;
            }
            size_t size = position - start;
            char *lexeme = strndup(&source_code[start], size);

            TokenType type = is_keyword(lexeme) ? TOKEN_KEYWORD : TOKEN_IDENTIFIER;
            return create_token(type, lexeme);
        }

        // Number
        if (isdigit(current)) {
            size_t start = position;
            while (position < length && isdigit(source_code[position])) {
                position++;
            }
            size_t size = position - start;
            char *lexeme = strndup(&source_code[start], size);

            return create_token(TOKEN_NUMBER, lexeme);
        }

        // Multi-character tokens
        if (current == '-' && position + 1 < length && source_code[position + 1] == '>') {
            position += 2;
            return create_token(TOKEN_ARROW, "->");
        }

        // Operators and symbols
        if (current == '=') {
            position++;
            return create_token(TOKEN_ASSIGNMENT, "=");
        }
        if (current == ':') {
            position++;
            return create_token(TOKEN_COLON, ":");
        }
        if (current == '(') {
            position++;
            return create_token(TOKEN_OPERATOR, "(");
        }
        if (current == ')') {
            position++;
            return create_token(TOKEN_OPERATOR, ")");
        }
        if (current == ',') {
            position++;
            return create_token(TOKEN_OPERATOR, ",");
        }
        if (current == '*') {
            position++;
            return create_token(TOKEN_OPERATOR, "*");
        }
        if (current == '{') {
            position++;
            return create_token(TOKEN_OPERATOR, "{");
        }
        if (current == '}') {
            position++;
            return create_token(TOKEN_OPERATOR, "}");
        }
        if (current == '"') {
            position++;
            return create_token(TOKEN_OPERATOR, "\"");
        }
        if (current == '.') {
            position++;
            return create_token(TOKEN_OPERATOR, ".");
        }

        // If character doesn't match any known pattern
        fprintf(stderr, "Unknown character: %c\n", current);
        exit(1);
    }

    // End of file
    return create_token(TOKEN_EOF, "");
}

// Free token memory
void free_token(Token *token) {
    if (token) {
        free(token->lexeme);
        free(token);
    }
}

// Cleanup lexer state
void cleanup_lexer() {
    source_code = NULL;
    position = 0;
    length = 0;
}

int main() {
    const char *source_code = 
        "square = sheep(x : x * x)\n"
        "fn greet(name: str, age: int = 25) -> str:\n"
        "    return f\"Hello {name}, you are {age} years old.\"";

    init_lexer(source_code);

    Token *token;
    printf("Tokens:\n");
    while ((token = get_next_token())->type != TOKEN_EOF) {
        printf("Type: %d, Lexeme: %s\n", token->type, token->lexeme);
        free_token(token);
    }

    cleanup_lexer();
    return 0;
}