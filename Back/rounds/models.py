from django.db import models
from leagues.models import League

class Round(models.Model):
    liga = models.ForeignKey(League, on_delete=models.CASCADE)
    numero_rodada = models.IntegerField()
