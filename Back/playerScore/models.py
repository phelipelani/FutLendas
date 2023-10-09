from django.db import models
from players.models import Players
from rounds.models import Round

class PlayersScore(models.Model):
    player = models.ForeignKey(Players, on_delete=models.CASCADE)
    round = models.ForeignKey(Round, on_delete=models.CASCADE)
    score = models.DecimalField(max_digits=5, decimal_places=2)
   
