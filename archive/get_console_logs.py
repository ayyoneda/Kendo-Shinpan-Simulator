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
    
    if not target_ws:
        print("No target found!")
    else:
        print("Connecting to target:", target_ws)
        ws = websocket.create_connection(target_ws)
        
        # Enable Console and Log domains
        ws.send(json.dumps({"id": 1, "method": "Console.enable"}))
        ws.send(json.dumps({"id": 2, "method": "Log.enable"}))
        ws.send(json.dumps({"id": 3, "method": "Runtime.enable"}))
        
        ws.settimeout(3)
        start = time.time()
        while time.time() - start < 4:
            try:
                res = ws.recv()
                msg = json.loads(res)
                if msg.get('method') in ['Console.messageAdded', 'Runtime.consoleAPICalled', 'Runtime.exceptionThrown', 'Log.entryAdded']:
                    print("CDP EVENT:", json.dumps(msg, indent=2))
            except Exception as e:
                break
        ws.close()
finally:
    proc.terminate()
