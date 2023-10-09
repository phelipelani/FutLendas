from rest_framework import serializers
from platform import Player

class PlayerSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nome = serializers.CharField()
    custo = serializers.IntegerField()