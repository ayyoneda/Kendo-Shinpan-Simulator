import subprocess, time, json, urllib.request, websocket

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

proc = subprocess.Popen([
    edge_path,
    "--headless",
    "--remote-debugging-port=9222",
    "--remote-allow-origins=*",
    "--allow-file-access-from-files",
    "file:///c:/temp/Shinpan_Educativo/ferramenta_shinpan_v2.1.0.html"
])

time.sleep(2)

try:
    req = urllib.request.urlopen("http://localhost:9222/json")
    pages = json.loads(req.read().decode('utf-8'))
    target_ws = None
    for p in pages:
        if 'ferramenta_shinpan_v2.1.0.html' in p.get('url', ''):
            target_ws = p.get('webSocketDebuggerUrl')
            break
    
    if target_ws:
        ws = websocket.create_connection(target_ws)
        ws.send(json.dumps({
            "id": 1,
            "method": "Runtime.evaluate",
            "params": {"expression": "JSON.stringify({ title: document.title, menuCollapsed: document.getElementById('controls-container').classList.contains('collapsed'), canvasWidth: document.getElementById('kendoCanvas').width, canvasHeight: document.getElementById('kendoCanvas').height, currentLang: currentLang, stateExists: typeof state !== 'undefined' })"}
        }))
        res = ws.recv()
        print("DOM State:", res)
        ws.close()
finally:
    proc.terminate()
