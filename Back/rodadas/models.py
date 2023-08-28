from django.db import models
from ligas.models import Liga

class Rodada(models.Model):
    liga = models.ForeignKey(Liga, on_delete=models.CASCADE)  
    data_da_rodada = models.DateField()
