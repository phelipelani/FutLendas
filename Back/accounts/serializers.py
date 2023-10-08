from rest_framework import serializers
from accounts.models import Account


class AccontSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)

    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=127, write_only=True)

    points = serializers.IntegerField(default=100, read_only=True)
    email = serializers.CharField()

    is_superuser = serializers.BooleanField(read_only=True)

    def create(self, validated_data: dict) -> Account:
        return Account.objects.create_user(**validated_data)

