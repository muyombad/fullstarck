# accounts/views.py

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import AccountHolder
from .serializers import AccountHolderSerializer

@api_view(['GET', 'POST'])
def account_holder_list(request):
    if request.method == 'GET':
        account_holders = AccountHolder.objects.all()
        serializero = AccountHolderSerializer(account_holders, many=True)
        return Response(serializero.data)

    elif request.method == 'POST':
        serializer = AccountHolderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def account_holder_detail(request, pk):
    try:
        account_holder = AccountHolder.objects.get(pk=pk)
    except AccountHolder.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AccountHolderSerializer(account_holder)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AccountHolderSerializer(account_holder, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        account_holder.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
