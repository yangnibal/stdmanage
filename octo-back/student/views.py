from django.shortcuts import render
from .models import Student
from books.models import Books
from .serializers import StudentSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, list=True, methods=['POST'])
    def addbooks(self, request):
        student = Student.objects.get(name=request.data['name'])
        book = Books.objects.get(name=request.data['bookname'])
        if book in student.books.all():
            student.books.remove(book)
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            student.books.add(book)
            return Response(status=status.HTTP_200_OK)
        

# Create your views here.
