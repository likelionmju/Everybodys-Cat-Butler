from django.shortcuts import redirect
from requests import post
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


@api_view(['GET'])
def kakao_login(request):
    return redirect(
        'https://kauth.kakao.com/oauth/authorize?client_id=56a0557bbe0416b25abbf92454373658&redirect_uri=http://localhost:8000/kakao/token&response_type=code')


@api_view(['GET'])
def user_access_token(request):
    if 'code' in request.query_params:
        data = {
            'grant_type': 'authorization_code',
            'client_id': '56a0557bbe0416b25abbf92454373658',
            'redirect_uri': 'http://localhost:8000/kakao/token',
            'code': request.query_params['code']
        }
        res = post('https://kauth.kakao.com/oauth/token', data=data)
        res = post('https://kapi.kakao.com/v2/user/me',
                   headers={'Authorization': 'Bearer ' + res.json()['access_token']})
        return Response(res.json())
