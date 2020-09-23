from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics
from rest_framework import viewsets


# Create your views here.
# get,post 처리
class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    #permission_classes = [IsAuthenticated] #인증되지 않은 요청은 안뜨게하겠다
    lookup_field = "id"

    #def perform_create(self, serializer):
    #    serializer.save(id=self.request.id)

    
class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    #permission_classes = [IsAuthenticated]
    lookup_field = "id"
