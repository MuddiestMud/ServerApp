from rest_framework import serializers
from client.models import Client

# client serializer


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'
