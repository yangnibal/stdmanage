from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=10, unique=True)
    books = models.ManyToManyField(default=None)
# Create your models here.
