from django.db import models

class Players(models.Model):
    nome = models.CharField(max_length= 255)
    custo = models.DecimalField(max_digits=5, decimal_places=2)
