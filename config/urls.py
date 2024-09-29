from django.contrib import admin
from django.urls import path
from main.views import index, jugar, test, JJGR

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('jugar/', jugar, name='jugar'),
    path('test-visual/', test, name='test'),
    path('acerca-de/', JJGR, name='JJGR'),
]
