#!/usr/bin/python

import os
import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
