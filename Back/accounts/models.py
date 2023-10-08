from django.contrib.auth.models import AbstractUser
from django.db import models

class Account(AbstractUser):
    lendasCoin = models.IntegerField(default=100)
    
