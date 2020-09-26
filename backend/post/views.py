from django.shortcuts import redirect
from requests import post, get
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer


# Create your views here.
# get,post 처리
class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated] #인증되지 않은 요청은 안뜨게하겠다
    lookup_field = "id"

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)


class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]
    lookup_field = "id"


@api_view(['POST'])
def user_access_token(request):
    res = post('https://kauth.kakao.com/oauth/token', data=request.data)
    return Response(res.json())
