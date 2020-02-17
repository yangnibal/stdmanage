from django.shortcuts import render
from .models import User
from books.models import Books
from problems.models import Problems
from .serializers import UserSerializer, AuthTokenSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def token_request(request):
        if user_requested_token() and token_request_is_warranted():
            new_token = Token.objects.create(user=request.user)

    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializers.is_valid():
            user = serializers.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, list=True, methods=['GET'])
    def me(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

    @action(detail=False, list=True, methods=['POST'])
    def login(self, request):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

    @action(detail=False, list=True, methods=['GET'])
    def logout(self, request):
        if not request.user.is_authenticated:
            print(request.user)
            return Response("Do not exits user")
        request.user.auth_token.delete()
        return Response("user token delete success")
        
    @action(detail=False, list=True, methods=['POST'])
    def other(self, request):
        user = User.objects.get(username=request.data['username'])
        serializer = UserSerializer(user)
        return Response(serializer.data)

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

    @action(detail=False, list=True, methods=['POST'])
    def addprobs(self, request):
        student = Student.objects.get(name=request.data['name'])
        wrong_prob = Problems.objects.get(number=request.data['number'])
        if wrong_prob in student.wrong_probs.all():
            student.wrong_probs.remove(wrong_prob)
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            student.wrong_probs.add(wrong_prob)
            return Response(status=status.HTTP_200_OK)
# Create your views here.
