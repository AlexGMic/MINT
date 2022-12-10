from django.urls import path
from . import views
from .views import CustomAuthToken

urlpatterns=[
    path('', views.apiOverView, name='apiOverView'),
    path('article-list/', views.getArticles, name='getArticles'),
    path('article-list/<str:pk>/', views.getArticle, name='getArticle'),
    path('article-create/', views.postArticles, name='postArticles'),
    path('login/', CustomAuthToken.as_view())
]