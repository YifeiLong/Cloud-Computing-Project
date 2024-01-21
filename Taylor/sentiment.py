import pandas as pd
from textblob import TextBlob


# 专辑情感得分
def album_sentiment_score(album):
    if album == 'Taylor Swift':
        data = pd.read_csv('./dataset/01-taylor_swift.csv', encoding='latin1')
    elif album == 'Fearless':
        data = pd.read_csv('./dataset/02-fearless_taylors_version.csv', encoding='latin1')
    elif album == 'Speak Now':
        data = pd.read_csv('./dataset/03-speak_now_deluxe_package.csv', encoding='latin1')
    elif album == 'Red':
        data = pd.read_csv('./dataset/04-red_deluxe_edition.csv', encoding='latin1')
    elif album == '1989':
        data = pd.read_csv('./dataset/05-1989_deluxe.csv', encoding='latin1')
    elif album == 'Reputation':
        data = pd.read_csv('./dataset/06-reputation.csv', encoding='latin1')
    elif album == 'Lover':
        data = pd.read_csv('./dataset/07-lover.csv', encoding='latin1')
    elif album == 'Folklore':
        data = pd.read_csv('./dataset/08-folklore_deluxe_version.csv', encoding='latin1')
    elif album == 'Evermore':
        data = pd.read_csv('./dataset/09-evermore_deluxe_version.csv', encoding='latin1')
    else:
        data = pd.read_csv('./dataset/10-midnights.csv', encoding='latin1')

    name = pd.unique(data['track_title'])
    l = len(name)
    score = []
    grouped = data.groupby('track_n')

    for i in range(l):
        song = grouped.get_group(i + 1)
        total = 0
        for s in song['lyric']:
            judge = TextBlob(s)
            total += judge.sentiment.polarity
        score.append(total)

    album_score = pd.DataFrame({"name": name, "score": score})
    album_total_score = sum(score)

    return album_score, album_total_score


# 专辑情感得分排序
def all_album_score():
    album_name = ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputation', 'Lover',
                  'Folklore', 'Evermore', 'Midnights']

    album_sentiment = []  # 所有专辑情感得分
    for album in album_name:
        album_score, album_total_score = album_sentiment_score(album)
        album_sentiment.append(album_total_score)

    total = pd.DataFrame({"name": album_name, "score": album_sentiment})
    total = total.sort_values(by="score", axis=0, ascending=False)
    total = total.reset_index(drop=True)
    return total


# 所有歌曲情感得分
def all_song_score():
    data = pd.read_csv("./dataset/lyrics_2006-2022.csv")
    name = pd.unique(data['track_title'])
    l = len(name)
    score = []
    grouped = data.groupby(data['track_title'])

    for i in range(l):
        song = grouped.get_group(str(name[i]))
        total = 0
        for s in song['lyric']:
            judge = TextBlob(s)
            total += judge.sentiment.polarity
        score.append(total)

    all_score = pd.DataFrame({'name': name, 'score': score})
    all_score = all_score.sort_values(by='score', axis=0, ascending=False)
    all_score = all_score.reset_index(drop=True)
    all_score.to_csv("sentiment_sort.csv")

    all_positive = all_score[all_score['score'] > 0]
    all_positive = all_positive.reset_index(drop=True)

    all_negative = all_score[all_score['score'] < 0]
    all_negative = all_negative.sort_values(by='score', axis=0, ascending=True)
    all_negative = all_negative.reset_index(drop=True)

    return all_score, all_positive, all_negative


if __name__ == '__main__':
    print(all_album_score())

    all_score, all_positive, all_negative = all_song_score()
    print(f'all song score: {all_score}')
    print(f'positive score: {all_positive}')
    print(f'negative score: {all_negative}')

    album_name = ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputation', 'Lover',
                  'Folklore', 'Evermore', 'Midnights']
    for name in album_name:
        album_score, album_total_score = album_sentiment_score(name)
        print(f'album name: {name}, \nscore: {album_score}, \ntotal: {album_total_score}')
