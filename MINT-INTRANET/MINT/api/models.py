from django.db import models
from django.contrib.auth.models import User

# Create your models here.

category_choices = (
    ('Breaking-News', 'Breaking-News'),
    ('Latest-News', 'Latest-News'),
    ('Local-News', 'Local-News'),
    ('Business-News', 'Business-News'),
    ('International-News', 'International-News'),
    ('Technology-News', 'Technology-News')
)

class Article(models.Model):
    title = models.CharField(max_length=10000, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    category = models.CharField(choices=category_choices, max_length=100, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url
    