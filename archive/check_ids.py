import re

with open(r'c:/temp/Shinpan_Educativo/ferramenta_shinpan_v2.1.0.html', 'r', encoding='utf-8') as f:
    content = f.read()

ids_in_js = re.findall(r"document\.getElementById\(['\"](.*?)['\"]\)", content)
print(f'Total getElementById calls: {len(set(ids_in_js))}')

missing = []
for gid in ids_in_js:
    pattern = r'id=["\']' + re.escape(gid) + r'["\']'
    if not re.search(pattern, content):
        missing.append(gid)

print('Missing IDs:', set(missing))
