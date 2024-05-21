# accounts/serializers.py

from rest_framework import serializers
from .models import AccountHolder

class AccountHolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountHolder
        fields = '__all__'
