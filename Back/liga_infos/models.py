from django.db import models
from ligas.models import Liga

class LigaInfo(models.Model):
    liga = models.ForeignKey(Liga, on_delete=models.CASCADE)  # Chave estrangeira para a Liga à qual as informações pertencem
    total_de_gols = models.IntegerField()
    total_de_assistencias = models.IntegerField()
    total_de_jogos = models.IntegerField()
