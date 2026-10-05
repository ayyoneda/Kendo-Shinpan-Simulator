import subprocess, time, json, urllib.request

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

proc = subprocess.Popen([
    edge_path,
    "--headless",
    "--remote-debugging-port=9222",
    "file:///c:/temp/Shinpan_Educativo/test_runner.html"
])

time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9222/json")
    pages = json.loads(req.read().decode('utf-8'))
    print("Found targets:")
    for p in pages:
        print("  -", p.get('title'), "|", p.get('url'))
finally:
    proc.terminate()
