import pandas as pd


def read_data():
    raw_data = pd.read_csv("./dataset/spotify-2023.csv", encoding='latin1')
    data = raw_data[raw_data['artist(s)_name'] == 'Taylor Swift'].copy()
    data.drop(['artist(s)_name', 'artist_count', 'mode'], axis=1, inplace=True)
    return data


def ana_bpm():
    data = read_data()
    data['bpm'] = pd.to_numeric(data['bpm'], errors='coerce')
    data = data.drop(data.loc[data['bpm'] <= 20].index)
    data = data.reset_index()
    data = data.drop('index', axis=1)
    avg_bpm = data['bpm'].mean()
    min_bpm = data['bpm'].min()
    max_bpm = data['bpm'].max()
    return avg_bpm, min_bpm, max_bpm


def ana_key():
    data = read_data()
    counts = data['key'].value_counts().reset_index()
    counts.columns = ['key', 'counts']
    return counts


def ana_dance():
    data = read_data()
    data['danceability_%'] = pd.to_numeric(data['danceability_%'], errors='coerce')
    avg_dance = data['danceability_%'].mean()
    min_dance = data['danceability_%'].min()
    max_dance = data['danceability_%'].max()
    return avg_dance, min_dance, max_dance


def ana_energy():
    data = read_data()
    data['energy_%'] = pd.to_numeric(data['energy_%'], errors='coerce')
    avg_energy = data['energy_%'].mean()
    min_energy = data['energy_%'].min()
    max_energy = data['energy_%'].max()
    return avg_energy, min_energy, max_energy


def ana_acou():
    data = read_data()
    data['acousticness_%'] = pd.to_numeric(data['acousticness_%'], errors='coerce')
    avg_acou = data['acousticness_%'].mean()
    min_acou = data['acousticness_%'].min()
    max_acou = data['acousticness_%'].max()
    return avg_acou, min_acou, max_acou


def ana_live():
    data = read_data()
    data['liveness_%'] = pd.to_numeric(data['liveness_%'], errors='coerce')
    avg_live = data['liveness_%'].mean()
    min_live = data['liveness_%'].min()
    max_live = data['liveness_%'].max()
    return avg_live, min_live, max_live


def ana_speech():
    data = read_data()
    data['speechiness_%'] = pd.to_numeric(data['speechiness_%'], errors='coerce')
    avg_speech = data['speechiness_%'].mean()
    min_speech = data['speechiness_%'].min()
    max_speech = data['speechiness_%'].max()
    return avg_speech, min_speech, max_speech


if __name__ == '__main__':
    print(ana_bpm())
    print(ana_live())
    print(ana_key())
    print(ana_dance())
    print(ana_energy())
    print(ana_acou())
    print(ana_speech())
