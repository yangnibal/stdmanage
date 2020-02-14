from django.db import models
from books.models import Books

class Problems(models.Model):
    number = models.CharField(max_length=5)
    book = models.ForeignKey(Books, on_delete=models.CASCADE)
    image = models.ImageField(null=False)
# Create your models here.
