from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'imageURL', 'category', 'description', 'updated', 'created']

class ArticleSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'