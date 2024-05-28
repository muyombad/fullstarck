from rest_framework import viewsets
from .models import AccountHolder
from .serializers import AccountHolderSerializer

class AccountHolderViewSet(viewsets.ModelViewSet):
    queryset = AccountHolder.objects.all()
    serializer_class = AccountHolderSerializer