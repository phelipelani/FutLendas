from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

from lineups.models import Lineup
from players.models import Players


class PlayerInLineup(models.Model):
    lineup = models.ForeignKey(Lineup, on_delete=models.CASCADE)
    player = models.ForeignKey(Players, on_delete=models.CASCADE)
    position = models.CharField(max_length=10, choices=[('titular', 'Titular'), ('goleiro', 'Goleiro'), ('reserva', 'Reserva')])




  

