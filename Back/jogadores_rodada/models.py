from django.db import models
from users.models import User
from rodadas.models import Rodada


class JogadorRodada(models.Model):
    jogador = models.ForeignKey(User, on_delete=models.CASCADE)
    rodada = models.ForeignKey(Rodada, on_delete=models.CASCADE)
    gols_na_rodada = models.IntegerField()
    assistencias_na_rodada = models.IntegerField()
    defesas_na_rodada = models.IntegerField()
    gols_sofridos_rodada = models.IntegerField()
    advertencias_na_rodada = models.IntegerField()
