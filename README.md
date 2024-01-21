# 云计算期末项目

### 目录结构

```shell
E:.
│  app.py
│  project.txt
│  README.md
│  requirements.txt
│  实验报告.pdf
│          
├─static
│  ├─fonts
│  │      fontawesome-webfont.eot?
│  │      fontawesome-webfont.svg
│  │      fontawesome-webfont.ttf
│  │      fontawesome-webfont.woff
│  │      fontawesome-webfont.woff2
│  │      glyphicons-halflings-regular.eot
│  │      glyphicons-halflings-regular.eot?
│  │      glyphicons-halflings-regular.svg
│  │      glyphicons-halflings-regular.ttf
│  │      glyphicons-halflings-regular.woff
│  │      glyphicons-halflings-regular.woff2
│  │      
│  ├─images
│  │      
│  ├─scripts
│  │  │  common.js
│  │  │  index.js
│  │  │  lyric.js
│  │  │  song.js
│  │  │  wordcloud_show.js
│  │  │  
│  │  └─Plugin
│  │      │  bmap.min.js
│  │      │  echarts.min.js
│  │      │  jquery-3.3.1.min.js
│  │      │  jquery.pagination.min.js
│  │      │  jquery.slimscroll.min.js
│  │      │  
│  │      └─laydate
│  │          │  laydate.js
│  │          │  
│  │          └─theme
│  │              └─default
│  │                  │  laydate.css
│  │                  │  
│  │                  └─font
│  │                          iconfont.eot
│  │                          iconfont.svg
│  │                          iconfont.ttf
│  │                          iconfont.woff
│  │                          
│  └─styles
│          bootstrap-table.css
│          bootstrap.min.css
│          common.css
│          pagination.css
│          
├─Taylor
│  │  concert.py
│  │  create_wordcloud.py
│  │  feature.py
│  │  predict.py
│  │  rank.py
│  │  sentiment.py
│  │  
│  ├─dataset
│  │      01-taylor_swift.csv
│  │      02-fearless_taylors_version.csv
│  │      03-speak_now_deluxe_package.csv
│  │      04-red_deluxe_edition.csv
│  │      05-1989_deluxe.csv
│  │      06-reputation.csv
│  │      07-lover.csv
│  │      08-folklore_deluxe_version.csv
│  │      09-evermore_deluxe_version.csv
│  │      10-midnights.csv
│  │      concert.csv
│  │      lyrics_2006-2022.csv
│  │      spotify-2023.csv
│  │      spotify_taylorswift.csv
│  │      stopwords.txt
│  │      taylor_swift_lyrics.csv
│  │      
│  └─__pycache__
│          sentiment.cpython-39.pyc
│          
├─templates
│      index.html
│      lyric.html
│      song.html
│      wordcloud_show.html
│      
└─__pycache__
        app.cpython-39.pyc
        
```

其中 `/templates` 中存放html文件，`/static/scripts` 中存放html文件对应的js文件，`/static/styles`  中存放网页的CSS样式文件。

`/Taylor` 中存放数据分析全部代码。



### 访问方式

**访问网页：**

在命令行中输入

```shell
python app.py
```

然后在浏览器中输入：http://localhost:5000 即可开始访问。

**运行数据分析代码：**

切换到 `Taylor` 文件夹下，然后根据文件输入下列命令：

```shell
python sentiment.py
python rank.py
// 替换为要运行的文件名
```

