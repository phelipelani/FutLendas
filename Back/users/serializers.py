from rest_framework import serializers
from users.models import User

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)

    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=150, write_only=True)

    posição = serializers.CharField(max_length=7)
    email = serializers.EmailField()
    is_capitain = serializers.BooleanField(default=False)

    def create (self, validated_data:dict)-> User:
        return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150,write_only=True)
    password = serializers.CharField(max_length=150, write_only=True)
        

