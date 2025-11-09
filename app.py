from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # return render_template('maintenance.html')
    # fix this later
    return render_template('index.html')

@app.route('/counter')
def counter():
    return render_template('counter.html')

@app.route('/maintenance')
def maintenance():
    return render_template('maintenance.html')

if __name__ == '__main__':
    app.run(debug=True)