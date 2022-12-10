from django.shortcuts import render
from .models import Article

from .serializers import ArticleSerializer, ArticleSerializerPost

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from rest_framework.permissions import IsAdminUser

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

# Create your views here.

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk
        })


@api_view(['GET'])
def apiOverView(request):
    api_urls={
        'List':'/article-list/',
        'Detail View':'/article-list/<str:pk>/',
        'Create':'/article-create/',
        'Update':'/article-update/<str:pk>/',
        'Delete':'/article-delete/<str:pk>/',
    }
    return Response(api_urls)

@api_view(['GET'])
def getArticles(request):
    try:
        article = Article.objects.all().order_by('-id')
        serializer = ArticleSerializer(article, many=True)
        return Response(serializer.data)
    except:
        return Response("Invalid Request")
    
@api_view(['GET'])
def getArticle(request, pk):
    try:
        article = Article.objects.get(id=pk)
        serializer = ArticleSerializer(article, many=False)
        return Response(serializer.data)
    except:
        return Response("Invalid Request")
    
@api_view(['POST'])
@permission_classes([IsAdminUser])
def postArticles(request):
    serializer = ArticleSerializerPost(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)