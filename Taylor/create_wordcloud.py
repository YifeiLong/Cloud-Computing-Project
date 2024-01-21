import gensim
import pandas as pd
import numpy as np
import random
from stylecloud import gen_stylecloud
from collections import defaultdict
from sentiment import all_song_score


# 按专辑绘制词云图
def create_wordcloud(album):
    if album == 'Taylor Swift':
        data = pd.read_csv('./dataset/01-taylor_swift.csv')
    elif album == 'Fearless':
        data = pd.read_csv('./dataset/02-fearless_taylors_version.csv')
    elif album == 'Speak Now':
        data = pd.read_csv('./dataset/03-speak_now_deluxe_package.csv')
    elif album == 'Red':
        data = pd.read_csv('./dataset/04-red_deluxe_edition.csv')
    elif album == '1989':
        data = pd.read_csv('./dataset/05-1989_deluxe.csv')
    elif album == 'Reputation':
        data = pd.read_csv('./dataset/06-reputation.csv')
    elif album == 'Lover':
        data = pd.read_csv('./dataset/07-lover.csv')
    elif album == 'Folklore':
        data = pd.read_csv('./dataset/08-folklore_deluxe_version.csv')
    elif album == 'Evermore':
        data = pd.read_csv('./dataset/09-evermore_deluxe_version.csv')
    else:
        data = pd.read_csv('./dataset/10-midnights.csv')

    stopword = open("./dataset/stopwords.txt", 'r').read()

    data['clean_lyric'] = pd.Series(data['lyric'], dtype="string")
    # 小写
    data['clean_lyric'] = data['clean_lyric'].str.lower()
    # 去停用词
    data['clean_lyric'] = data['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in stopword]))
    # 去标点
    data['clean_lyric'] = data['clean_lyric'].str.replace('[^\w\s]', '')
    data['clean_lyric'] = data['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in stopword]))

    sentence = [line.strip() for line in data['clean_lyric']]
    cut_word = " ".join(sentence)

    palette_list = ['cartocolors.qualitative.Antique_10', 'cartocolors.sequential.RedOr_7',
                    'cmocean.diverging.Balance_20', 'scientific.diverging.Broc_8', 'mycarta.Cube1_16',
                    'wesanderson.Darjeeling2_5']
    icon_list = ['fas fa-heart', 'fas fa-star', 'fas fa-cloud', 'fas fa-comment', 'fas fa-splotch']

    output_path = album + ".png"

    gen_stylecloud(text=cut_word,
                   gradient='horizontal',
                   size=1024,
                   palette=random.choice(palette_list),
                   background_color='white',
                   max_words=100,
                   collocations=False,
                   icon_name=random.choice(icon_list),
                   output_name=output_path)


# 全部歌词词频
def all_word_frequency():
    all_songs = pd.read_csv("./dataset/lyrics_2006-2022.csv")
    stopword = open("./dataset/stopwords.txt", 'r').read()

    all_songs['clean_lyric'] = pd.Series(all_songs['lyric'], dtype="string")
    all_songs['clean_lyric'] = all_songs['clean_lyric'].str.lower()
    all_songs['clean_lyric'] = all_songs['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))
    all_songs['clean_lyric'] = all_songs['clean_lyric'].str.replace('[^\w\s]', '')
    all_songs['clean_lyric'] = all_songs['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))

    sentence = []
    for s in all_songs['clean_lyric']:
        sentence.append(str(s))
    for i in range(len(sentence)):
        sentence[i] = sentence[i].split()

    sentences = [[word for word in line if word not in stopword] for line in sentence]

    model = gensim.models.Word2Vec(sentences, min_count=25, window=5)
    words = list(model.wv.key_to_index)  # 所有单词

    # 获得词频
    frequency = defaultdict(int)
    for line in sentences:
        for token in line:
            frequency[token] += 1
    words_frequency = [frequency[word] for word in words]
    word_frequency = pd.DataFrame({"单词": words, "频率": words_frequency})
    return word_frequency


# 负向情感歌曲词云图
def negative_wordcloud():
    all_score, all_positive, all_negative = all_song_score()
    all_songs = pd.read_csv("./dataset/lyrics_2006-2022.csv")

    negative = np.array(all_negative['name'])
    for i in range(len(negative)):
        negative[i] = negative[i].strip(u'\u200b')
    negative = set(negative)  # 负向情绪歌名

    negative_lyric = []
    all_songs_array = np.array(all_songs)
    for i in range(9370):
        if all_songs_array[i][1] in negative:
            negative_lyric.append(all_songs_array[i][3])
    negative_lyric = pd.DataFrame({'lyric': negative_lyric})

    negative_lyric['clean_lyric'] = pd.Series(negative_lyric['lyric'], dtype="string")
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].str.lower()
    stopword = open("./dataset/stopwords.txt", 'r').read()
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].str.replace('[^\w\s]', '')
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))

    # 绘制词云图
    sentence = [line.strip() for line in negative_lyric['clean_lyric']]
    cut_word = " ".join(sentence)

    gen_stylecloud(text=cut_word,
                   gradient='horizontal',
                   size=1024,
                   palette='tableau.BlueRed_12',
                   background_color='white',
                   max_words=100,
                   collocations=False,
                   icon_name='fas fa-square',
                   output_name=r'./negative.png')


# 负向情感歌曲词频
def negative_word_frequency():
    all_score, all_positive, all_negative = all_song_score()
    all_songs = pd.read_csv("./dataset/lyrics_2006-2022.csv")

    negative = np.array(all_negative['name'])
    for i in range(len(negative)):
        negative[i] = negative[i].strip(u'\u200b')
    negative = set(negative)  # 负向情绪歌名

    negative_lyric = []
    all_songs_array = np.array(all_songs)
    for i in range(9370):
        if all_songs_array[i][1] in negative:
            negative_lyric.append(all_songs_array[i][3])
    negative_lyric = pd.DataFrame({'lyric': negative_lyric})

    negative_lyric['clean_lyric'] = pd.Series(negative_lyric['lyric'], dtype="string")
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].str.lower()
    stopword = open("./dataset/stopwords.txt", 'r').read()
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].str.replace('[^\w\s]', '')
    negative_lyric['clean_lyric'] = negative_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))

    sentence = []
    for s in negative_lyric['clean_lyric']:
        sentence.append(str(s))
    for i in range(len(sentence)):
        sentence[i] = sentence[i].split()
    sentences = [[word for word in line if word not in stopword] for line in sentence]

    model = gensim.models.Word2Vec(sentences, min_count=25, window=5)
    words = list(model.wv.key_to_index)  # 所有单词
    frequency = defaultdict(int)
    for line in sentences:
        for token in line:
            frequency[token] += 1
    words_frequency = [frequency[word] for word in words]
    word_frequency = pd.DataFrame({"单词": words, "频率": words_frequency})

    return word_frequency


# 正向情感歌词词云图
def positive_wordcloud():
    all_score, all_positive, all_negative = all_song_score()
    all_songs = pd.read_csv("./dataset/lyrics_2006-2022.csv")

    positive = np.array(all_positive['name'])
    for i in range(len(positive)):
        positive[i] = positive[i].strip(u'\u200b')
    positive = set(positive)

    positive_lyric = []
    all_songs_array = np.array(all_songs)
    for i in range(9370):
        if all_songs_array[i][1] in positive:
            positive_lyric.append(all_songs_array[i][3])
    positive_lyric = pd.DataFrame({'lyric': positive_lyric})

    positive_lyric['clean_lyric'] = pd.Series(positive_lyric['lyric'], dtype="string")
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].str.lower()
    stopword = open("./dataset/stopwords.txt", 'r').read()
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].str.replace('[^\w\s]', '')
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))

    sentence = [line.strip() for line in positive_lyric['clean_lyric']]
    cut_word = " ".join(sentence)

    gen_stylecloud(text=cut_word,
                   gradient='horizontal',
                   size=1024,
                   palette='cmocean.sequential.Dense_16',
                   background_color='white',
                   max_words=100,
                   collocations=False,
                   icon_name='fas fa-certificate',
                   output_name=r'./positive.png')


# 正向情感歌词词频
def positive_word_frequency():
    all_score, all_positive, all_negative = all_song_score()
    all_songs = pd.read_csv("./dataset/lyrics_2006-2022.csv")

    positive = np.array(all_positive['name'])
    for i in range(len(positive)):
        positive[i] = positive[i].strip(u'\u200b')
    positive = set(positive)

    positive_lyric = []
    all_songs_array = np.array(all_songs)
    for i in range(9370):
        if all_songs_array[i][1] in positive:
            positive_lyric.append(all_songs_array[i][3])
    positive_lyric = pd.DataFrame({'lyric': positive_lyric})

    positive_lyric['clean_lyric'] = pd.Series(positive_lyric['lyric'], dtype="string")
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].str.lower()
    stopword = open("./dataset/stopwords.txt", 'r').read()
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].str.replace('[^\w\s]', '')
    positive_lyric['clean_lyric'] = positive_lyric['clean_lyric'].apply(
        lambda x: ' '.join([word for word in x.split() if word not in (stopword)]))

    sentence = []

    for s in positive_lyric['clean_lyric']:
        sentence.append(str(s))
    for i in range(len(sentence)):
        sentence[i] = sentence[i].split()

    sentences = [[word for word in line if word not in stopword] for line in sentence]

    model = gensim.models.Word2Vec(sentences, min_count=25, window=5)
    words = list(model.wv.key_to_index)
    frequency = defaultdict(int)
    for line in sentences:
        for token in line:
            frequency[token] += 1
    words_frequency = [frequency[word] for word in words]
    word_frequency = pd.DataFrame({"单词": words, "频率": words_frequency})

    return word_frequency


if __name__ == '__main__':
    print(f'All songs words frequency: \n{all_word_frequency()}')
    print(f'Negative songs words frequency: \n{negative_word_frequency()}')
    print(f'Positive songs words frequency: \n{positive_word_frequency()}')
