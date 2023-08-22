from django.shortcuts import render,HttpResponse

from datetime import datetime


# Create your views here.

def show_index(request):

    return render(request,'index.html')
