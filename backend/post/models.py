from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    #user= models.ForeignKey(User,on_delete=models.CASCADE)
    image= models.ImageField(upload_to='image/')
    name = models.CharField(max_length=50, default=" ")
    created_at = models.DateTimeField(auto_now_add=True)
    addr = models.CharField(max_length=150, default=" ")
    content = models.TextField(default=" ")
    detail = models.TextField(default=" ")
    
    def __str__(self):
        """A string representation of the model."""
        return self.name
    
