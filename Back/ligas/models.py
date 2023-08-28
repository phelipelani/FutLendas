from django.db import models
from users.models import User


class Liga(models.Model):
    nome = models.CharField(max_length=100)
    icone_url = models.CharField(max_length=100)
    data_criacao = models.DateTimeField(auto_now_add=True)
    capitao = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="capitao", unique=True
    )
