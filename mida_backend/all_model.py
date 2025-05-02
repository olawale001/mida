import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Embedding
from tensorflow.keras.utils import to_categorical
import pickle
import os


text = """
Welcome to the AI Content Generator!
This system can generate text based on your prompt using an LSTM model.
You can train this model on your own dataset for custom applications.
"""


chars = sorted(list(set(text)))
char_to_idx = {c: i for i, c in enumerate(chars)}
idx_to_char = {i: c for i, c in enumerate(chars)}
vocab_size = len(chars)


seq_length = 40
X, y = [], []

for i in range(len(text) - seq_length):
    seq = text[i:i+seq_length]
    target = text[i+seq_length]
    X.append([char_to_idx[c] for c in seq])
    y.append(char_to_idx[target])

X = np.array(X)
y = to_categorical(y, num_classes=vocab_size)
X = X.reshape((X.shape[0], X.shape[1], 1))  


model = Sequential([
    LSTM(128, input_shape=(seq_length, 1)),
    Dense(vocab_size, activation='softmax')
])
model.compile(loss='categorical_crossentropy', optimizer='adam')


model.fit(X, y, epochs=40, batch_size=64)

os.makedirs("saved_model", exist_ok=True)
model.save("saved_model/ai_text_gen_model.h5")
with open("saved_model/char_mapping.pkl", "wb") as f:
    pickle.dump((char_to_idx, idx_to_char), f)

print("✅ Model and mappings saved to `saved_model/`.")
