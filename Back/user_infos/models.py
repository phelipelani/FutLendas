from django.db import models
from users.models import User

class User_Info(models.Model):
    gols = models.IntegerField(default=0)
    assistencias = models.IntegerField(default=0)
    advertencias = models.IntegerField(default=0)
    vitorias = models.IntegerField(default=0)
    derrotas = models.IntegerField(default=0)
    empates = models.IntegerField(default=0)
    defesas = models.IntegerField(default=0)
    golsSofridos = models.IntegerField(default=0)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
