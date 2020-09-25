from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'id',
            'image',
            'name',
            'date',
            'address',
            'desc',
            'remark',         
        )
        read_only_fields = ('date',)

