from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def jugar(request):
    return render(request, 'jugar.html')
