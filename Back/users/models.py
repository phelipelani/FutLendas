from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', blank=True)
    posição = models.CharField(max_length=7)
    email = models.EmailField(unique=True)
    is_capitain = models.BooleanField(default=False)



