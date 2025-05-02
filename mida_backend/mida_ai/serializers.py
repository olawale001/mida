from rest_framework import serializers
from .models import AIContent


class AIContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIContent
        fields = '__all__'