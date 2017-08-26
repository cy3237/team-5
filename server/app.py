from os.path import dirname, abspath
from flask import Flask, Response

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    content = app.send_static_file('../static/dist/index.html')
    return Response(content, mimetype="text/html")

if __name__ == "__main__":
    app.run(debug=True)
