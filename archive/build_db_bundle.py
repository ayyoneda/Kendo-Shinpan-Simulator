import os, sys, json
try:
    import yaml
except ImportError:
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "pyyaml"], check=True)
    import yaml

base_dir = r"c:\temp\Shinpan_Educativo\corpus\fik\regulations\2023-07-26"

def load_yaml(filename):
    path = os.path.join(base_dir, filename)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    return None

def load_text_files():
    text_dir = os.path.join(base_dir, "text")
    texts = {}
    if os.path.exists(text_dir):
        for fname in os.listdir(text_dir):
            if fname.endswith(".md"):
                with open(os.path.join(text_dir, fname), 'r', encoding='utf-8') as f:
                    texts[fname] = f.read()
    return texts

import datetime

class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (datetime.date, datetime.datetime)):
            return obj.isoformat()
        return super().default(obj)

def build_bundle():
    print("Loading corpus dataset...")
    context = load_yaml("context.yaml")
    manifest = load_yaml("manifest.yaml")
    nodes = load_yaml("nodes.yaml")
    figures = load_yaml("figures.yaml")
    tables = load_yaml("tables.yaml")
    relationships = load_yaml("relationships.yaml")
    text_streams = load_text_files()

    bundle = {
        "metadata": {
            "title": context.get("official_title") if context else "The Regulations of Kendo Shiai and Shinpan",
            "version": context.get("official_version") if context else "2023-07-26",
            "organization": "FIK",
            "node_count": len(nodes.get("nodes", [])) if nodes else 0,
            "figure_count": len(figures.get("figures", [])) if figures else 0,
            "relationship_count": len(relationships.get("relationships", [])) if relationships else 0,
        },
        "nodes": nodes.get("nodes", []) if nodes else [],
        "figures": figures.get("figures", []) if figures else [],
        "tables": tables.get("tables", []) if tables else [],
        "relationships": relationships.get("relationships", []) if relationships else [],
        "texts": text_streams
    }

    out_file = r"c:\temp\Shinpan_Educativo\regulations_db.json"
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(bundle, f, cls=DateEncoder, ensure_ascii=False, indent=2)

    file_size_kb = os.path.getsize(out_file) / 1024
    print(f"Successfully compiled regulations database to {out_file}")
    print(f"Total nodes: {bundle['metadata']['node_count']}")
    print(f"Total figures: {bundle['metadata']['figure_count']}")
    print(f"Total relationships: {bundle['metadata']['relationship_count']}")
    print(f"Compiled JSON file size: {file_size_kb:.2f} KB")

if __name__ == "__main__":
    build_bundle()
