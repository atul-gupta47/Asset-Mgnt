from .models import Users
from .models import stocks
from .models import Assignments
from rest_framework import serializers

class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('id','uname','pwd','email','fname','lname','bdate','utype')
        
        
class stocksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = stocks
        fields = ('id','type','name','serial_no','dop','exp_date','price') 

        
class AssignmentsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Assignments
        fields = ('id','entity','type','qty','uid','doa','doe')               
       