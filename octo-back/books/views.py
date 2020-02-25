from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Books
from .serializers import BooksSerializer
from .hwp import conversion

class BooksViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer

    def create(self, request):
        serializer = BooksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, list=True, methods=['POST'])
    def delete(self, request):
        book = Books.objects.get(name=request.data['name'])
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, list=True, methods=['POST'])
    def getprobs(self, request):
        book = Books.objects.get(name=request.data['name'])
        data = conversion(book.file)
        return Response(data)
# Create your views here.
