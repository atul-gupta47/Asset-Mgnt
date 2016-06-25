"""assetservices URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from asset import views



urlpatterns = [            
   url(r'^userlist/$', views.user_list),
   url(r'^userdetail/(?P<pk>[0-9]+)/$', views.user_detail),
   url(r'^admin/', admin.site.urls),
   url(r'^stocklist/$', views.stock_list),
   url(r'^stockdetail/(?P<pk>[0-9]+)/$', views.stock_detail),
   url(r'^assignmentlist/$', views.assignment_list),
   url(r'^assignmentdetail/(?P<pk>[0-9]+)/$',views.assignment_detail )
   
]



