from django.db import models
# from mida_user.models import CustomUser

class AIContent(models.Model):
    TYPE_CHOICES = [
        ('blog', 'Blog'),
        ('summary', 'Summary'),
        ('paraphrase', 'Paraphrase'),
        ('translation', 'Translation'),
        ('nlp', 'NLP')
    ]
    title = models.CharField(max_length=200)
    content_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    input_text = models.TextField()
    output_text = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    