from django.db import models
from books import Books

class Problems(models.Model):
    number = models.IntegerField()
    book = models.ForeignKey(Books)
    image = models.ImageField(null=False)
# Create your models here.
