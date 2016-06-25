from django.db import models

# Create your models here.
class Users(models.Model):
    uname = models.CharField(max_length=200)
    pwd = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    fname = models.CharField(max_length=200)
    lname = models.CharField(max_length=200)
    bdate = models.DateField(max_length=200)
    utype = models.CharField(max_length=200)
    
class stocks(models.Model):
    type = models.CharField(max_length=200)    
    name = models.CharField(max_length=200)
    serial_no = models.CharField(max_length=200)
    dop = models.DateField(max_length=200)
    exp_date = models.DateField(max_length=200)
    price = models.IntegerField(default=0)
    
    
class Assignments(models.Model):
    entity = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    qty = models.CharField(max_length=200)
    uid = models.CharField(max_length=200)
    doa = models.DateField()
    doe = models.DateField()
  
          
          
          
          
          