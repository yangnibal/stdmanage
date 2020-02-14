from django.db import models
from books.models import Books

class Student(models.Model):
    name = models.CharField(max_length=10, unique=True)
    books = models.ManyToManyField(Books, default=None)
# Create your models here.
