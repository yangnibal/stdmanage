from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User, AbstractBaseUser, UserManager, PermissionsMixin
from django.utils import timezone
from books.models import Books
from problems.models import Problems

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class User(AbstractBaseUser, PermissionsMixin):
    username = models.TextField(unique=True)
    password = models.TextField()
    email = models.EmailField(null=True, default=None)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    books = models.ManyToManyField(Books, default=None)
    wrong_probs = models.ManyToManyField(Problems, default=None)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['password', 'is_staff']

    objects = UserManager()
# Create your models here.
