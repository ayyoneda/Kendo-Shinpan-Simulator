import subprocess, time, json, urllib.request

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
user_data = r"c:\temp\Shinpan_Educativo\edge_profile"

proc = subprocess.Popen([
    edge_path,
    "--headless",
    "--remote-debugging-port=9222",
    f"--user-data-dir={user_data}",
    "file:///c:/temp/Shinpan_Educativo/ferramenta_shinpan_v2.1.0.html"
])

time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9222/json")
    pages = json.loads(req.read().decode('utf-8'))
    print("Page title:", pages[0].get('title'))
    print("Page URL:", pages[0].get('url'))
    
    # Connect via WebSocket or check console logs if possible
    ws_url = pages[0].get('webSocketDebuggerUrl')
    print("WebSocket URL:", ws_url)
finally:
    proc.terminate()
