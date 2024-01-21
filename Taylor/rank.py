import pandas as pd


# 榜单筛出Taylor
def read_data():
    raw_data = pd.read_csv("./dataset/spotify-2023.csv", encoding='latin1')
    data = raw_data[raw_data['artist(s)_name'] == 'Taylor Swift'].copy()
    data.drop(['artist(s)_name', 'artist_count', 'mode'], axis=1, inplace=True)
    return data


# 分析排行榜上榜次数
def num_chart():
    taylor = read_data()
    raw_data = pd.read_csv("./dataset/spotify-2023.csv", encoding='latin1')

    t_spotify = taylor['in_spotify_charts'].mean()
    max_spotify = taylor['in_spotify_charts'].max()
    min_spotify = taylor['in_spotify_charts'].min()
    avg_spotify = raw_data['in_spotify_charts'].mean()

    t_apple = taylor['in_apple_charts'].mean()
    max_apple = taylor['in_apple_charts'].max()
    min_apple = taylor['in_apple_charts'].min()
    avg_apple = raw_data['in_apple_charts'].mean()

    t_deezer = taylor['in_deezer_charts'].mean()
    max_deezer = taylor['in_deezer_charts'].max()
    min_deezer = taylor['in_deezer_charts'].min()
    avg_deezer = raw_data['in_deezer_charts'].mean()

    max_list = [max_spotify, max_apple, max_deezer]
    min_list = [min_spotify, min_apple, min_deezer]
    tay = [t_spotify, t_apple, t_deezer]
    avg = [avg_spotify, avg_apple, avg_deezer]
    return max_list, min_list, tay, avg


# 包含歌曲的歌单数
def num_playlist():
    taylor = read_data()
    raw_data = pd.read_csv("./dataset/spotify-2023.csv", encoding='latin1')

    t_spotify = taylor['in_spotify_playlists'].mean()
    max_spotify = taylor['in_spotify_playlists'].max()
    min_spotify = taylor['in_spotify_playlists'].min()
    avg_spotify = raw_data['in_spotify_playlists'].mean()

    t_apple = taylor['in_apple_playlists'].mean()
    max_apple = taylor['in_apple_playlists'].max()
    min_apple = taylor['in_apple_playlists'].min()
    avg_apple = raw_data['in_apple_playlists'].mean()

    t_deezer = taylor['in_deezer_playlists'].mean()
    max_deezer = taylor['in_deezer_playlists'].max()
    min_deezer = taylor['in_deezer_playlists'].min()
    avg_deezer = raw_data['in_deezer_playlists'].mean()

    max_list = [max_spotify, max_apple, max_deezer]
    min_list = [min_spotify, min_apple, min_deezer]
    tay = [t_spotify, t_apple, t_deezer]
    avg = [avg_spotify, avg_apple, avg_deezer]

    return max_list, min_list, tay, avg


# 火的程度
def popularity():
    data = pd.read_csv("./dataset/spotify_taylorswift.csv")
    data = data.drop(data.loc[data['popularity'] <= 20].index)
    data = data.reset_index()
    data = data.drop('index', axis=1)
    pop = data[['name', 'popularity']].copy()
    sorted_pop = pop.sort_values(by='popularity', ascending=False)
    return sorted_pop


if __name__ == '__main__':
    print(num_chart())
    print(num_playlist())
    print(popularity())
