from django.db import models
from mida_user.models import CustomUser

class AIContent(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    prompt = models.TextField()
    result = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)