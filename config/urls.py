from django.contrib import admin
from django.urls import path
from main.views import index, jugar

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('jugar/', jugar, name='jugar'),
]
