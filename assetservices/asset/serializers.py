from .models import Users
from rest_framework import serializers

class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('id','uname','pwd','email','fname','lname','bdate','utype')