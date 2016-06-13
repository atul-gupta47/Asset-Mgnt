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