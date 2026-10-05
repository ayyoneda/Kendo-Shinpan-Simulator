import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'c:/temp/Shinpan_Educativo/temp_test.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")

# Check balance of curly braces, brackets, and parentheses
stack = []
for i, line in enumerate(lines, 1):
    in_string = False
    str_char = None
    in_comment = False
    
    for j, char in enumerate(line):
        if in_comment:
            continue
        if char == '/' and j + 1 < len(line) and line[j+1] == '/':
            break
        if char in ('"', "'", '`'):
            if not in_string:
                in_string = True
                str_char = char
            elif str_char == char and (j == 0 or line[j-1] != '\\'):
                in_string = False
                str_char = None
            continue
            
        if not in_string:
            if char in '({[':
                stack.append((char, i, j+1))
            elif char in ')}]':
                if not stack:
                    print(f"Unmatched closing '{char}' at line {i}, col {j+1}")
                else:
                    top, top_i, top_j = stack.pop()
                    expected = {'(': ')', '{': '}', '[': ']'}[top]
                    if char != expected:
                        print(f"Mismatched closing '{char}' at line {i}, col {j+1}; expected '{expected}' for '{top}' from line {top_i}, col {top_j}")

if stack:
    print(f"Unclosed brackets/braces remaining: {len(stack)}")
    for item in stack[:5]:
        print(f"  Unclosed '{item[0]}' from line {item[1]}, col {item[2]}")
else:
    print("Brackets/braces balance check: OK!")
