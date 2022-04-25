#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    char x = 'A';
    printf("%c, %c, %c", x++, x+2, ++x);
    return 0;
}