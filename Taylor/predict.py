import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler


data = pd.read_csv('./dataset/spotify_taylorswift.csv')
y = data['popularity'].values
temp = data[['danceability', 'acousticness', 'energy', 'valence', 'tempo']].copy()

# 将数据拆分为训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(temp, y, test_size=0.2, random_state=42)

# 标准化数据
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 设定特征值贡献率阈值（示例：保留总方差的95%）
pca = PCA()
X_train_pca = pca.fit_transform(X_train_scaled)
threshold = 0.85
cumulative_variance_ratio = pca.explained_variance_ratio_.cumsum()
n_components = (cumulative_variance_ratio < threshold).sum() + 1
print(n_components)

# 使用PCA进行降维
pca = PCA(n_components=n_components)
X_train_pca = pca.fit_transform(X_train_scaled)
X_test_pca = pca.transform(X_test_scaled)

# 使用线性回归模型
model = LinearRegression()
model.fit(X_train_pca, y_train)

# 预测
y_pred = model.predict(X_test_pca)
print(y_pred)

# 评估模型
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')
