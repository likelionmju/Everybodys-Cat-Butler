from django.urls import path
#from rest_framework import routers
from . import views
#from .views import PostView, ListPost, DetailPost

#router = routers.DefaultRouter()
#router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    path('kakao/login', views.kakao_login, name='kakao_login'),
    path('kakao/token', views.user_access_token, name='kakao_access_token'),
]
