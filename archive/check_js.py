import re, sys

with open(r'c:/temp/Shinpan_Educativo/ferramenta_shinpan_v2.1.0.html', 'r', encoding='utf-8') as f:
    html = f.read()

script_match = re.search(r'<script>(.*?)</script>', html, re.DOTALL)
if not script_match:
    print("NO SCRIPT FOUND!")
    sys.exit(1)

js_code = script_match.group(1)

# Check string literal quotes line by line
lines = js_code.split('\n')
for idx, line in enumerate(lines, 1):
    # Check for unescaped double quotes inside double quoted string literals
    # or syntax errors
    pass

# We can use python's nodejs or python's webview or msedge via headless or python selenium/playwright or python execjs
# Or use Windows Script Host (cscript) to check JScript syntax!
with open(r'c:/temp/Shinpan_Educativo/temp_test.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print("Saved temp_test.js, line count:", len(lines))
