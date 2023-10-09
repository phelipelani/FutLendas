from django.db import models

class League(models.Model):
    nome = models.CharField(max_length= 255)
    created_at = models.DateTimeField(auto_now_add=True)
    descrição = models.TextField(blank=True)
