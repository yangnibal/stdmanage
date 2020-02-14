from django.shortcuts import render
from .models import Problems
from .serializers import ProblemsSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

class ProblemsViewSet(viewsets.ModelViewSet):
    queryset = Problems.objects.all()
    serializer_class = ProblemsSerializer

    def create(self, request):
        serializer = ProblemsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Create your views here.
