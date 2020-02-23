from django.db import models

class Books(models.Model):
    name = models.CharField(max_length=50)
    file = models.FileField(null=False)
# Create your models here.
