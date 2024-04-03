from django.contrib import admin
from django.urls import path, re_path
from API.views import *

urlpatterns = [
    path('products/', listProducts),
    path('products/<int:i>/', getProduct),
    path('categories/', listCategories),
    path('categories/<int:i>/', getCategory),
    path('categories/<int:i>/products/', filterByCategory),
]
