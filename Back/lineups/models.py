from django.db import models
from accounts.models import Account
from rounds.models import Round

class Lineup(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE, default=0)
    round = models.ForeignKey(Round, on_delete=models.CASCADE, default=0)