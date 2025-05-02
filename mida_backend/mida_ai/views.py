import tensorflow as tf
import numpy as np
import pickle
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import AIContent
from .serializers import AIContentSerializer

model = tf.keras.models.load_model("saved_model/ai_text_gen_model.h5")
with open("saved_model/char_mapping.pkl", "rb") as f:
    char_to_idx, idx_to_char = pickle.load(f)

SEQ_LENGTH = 40

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_text(request):
    prompt = request.data.get('prompt', '')[:SEQ_LENGTH]

    input_seq = [char_to_idx.get(c, 0) for c in prompt]
    while len(input_seq) < SEQ_LENGTH:
        input_seq.insert(0, 0)
    input_seq = np.array(input_seq).reshap((1, SEQ_LENGTH, 1))    

    generated = prompt
    for _ in range(200):
        prediction = model.predict(input_seq)[0]
        idx = np.argmax(prediction)
        char = idx_to_char.get(idx, '')
        generated += char
        input_seq = np.append(input_seq[:, 1:, :], [[[idx]]], axis=1)

    content = AIContent.object.create(user=request.user, prompt=prompt, result=generated)    
    serializer = AIContentSerializer(content)
    return Response(serializer.data)