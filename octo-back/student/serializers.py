from .models import Student
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer):
    books = serializers.CharField(source='books.name', read_only=True)
    class Meta:
        model = Student
        fields = ['name', 'books']