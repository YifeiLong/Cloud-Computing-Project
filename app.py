from flask import Flask, render_template

app = Flask(__name__)
app.template_folder = 'templates'


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/index.html')
def home():
    return index()


@app.route('/lyric.html')
def lyric():
    return render_template('lyric.html')


@app.route('/song.html')
def song():
    return render_template('song.html')


@app.route('/wordcloud_show.html')
def show_wc():
    return render_template('wordcloud_show.html')


if __name__ == '__main__':
    app.run()
