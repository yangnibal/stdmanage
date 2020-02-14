from .models import Problems
from rest_framework import serializers

class ProblemsSerializer(serializers.ModelSerializer):
    book = serializers.CharField(source='book.name')
    class Meta:
        model = Problems
        fields = ['number', 'book', 'image']