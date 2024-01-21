import pandas as pd
from operator import itemgetter


def country():
    data = pd.read_csv('./dataset/concert.csv', encoding='latin1')
    country_counts = data['Country'].value_counts().to_dict()
    sorted_count = sorted(country_counts.items(), key=itemgetter(1), reverse=True)
    return sorted_count


def venue():
    data = pd.read_csv('./dataset/concert.csv', encoding='latin1')
    top_venues = data['Venue'].value_counts().head(10)
    return top_venues


def revenue():
    data = pd.read_csv('./dataset/Taylor_Train.csv', encoding='1252')
    names = ['Fearless_Tour', 'Speak_Now_World_Tour', 'The_Red_Tour', 'The_1989_World_Tour']

    for name in names:
        filtered = data[data['Tour'] == name].copy()
        revenue = pd.to_numeric(filtered['Revenue'].str.replace(',', '').str.extract('(\d+)', expand=False),
                                errors='coerce')
        print(f'{name}: mean: {revenue.mean()}, min: {revenue.min()}, max: {revenue.max()}')

    data1 = pd.to_numeric(data['Revenue'].str.replace(',', '').str.extract('(\d+)', expand=False), errors='coerce')
    print(f'max: {data1.max()}, min: {data1.min()}, avg: {data1.mean()}')


def attend():
    data = pd.read_csv('./dataset/Taylor_Train.csv', encoding='1252')
    names = ['Fearless_Tour', 'Speak_Now_World_Tour', 'The_Red_Tour', 'The_1989_World_Tour']

    for name in names:
        filtered = data[data['Tour'] == name].copy()
        attend = pd.to_numeric(
            filtered['Attendance (tickets sold / available)'].str.split('/').str[0].str.replace(',', ''),
            errors='coerce')
        print(f'{name}: mean: {attend.mean()}, min: {attend.min()}, max: {attend.max()}')

    data1 = pd.to_numeric(data['Attendance (tickets sold / available)'].str.split('/').str[0].str.replace(',', ''),
                          errors='coerce')
    print(f'max: {data1.max()}, min: {data1.min()}, avg: {data1.mean()}')


def city():
    data = pd.read_csv('./dataset/Taylor_Train.csv', encoding='1252')
    usa = data[data['Country'] == 'United States'].copy()
    city = usa['City'].value_counts().head(30)
    return city


if __name__ == '__main__':
    print(country())
    print(venue())
    revenue()
    attend()
    print(city())
