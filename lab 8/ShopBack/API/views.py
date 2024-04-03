from datetime import datetime, timedelta

from django.core.exceptions import ObjectDoesNotExist
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from API.models import Product, Category
import json


def listProducts(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def getProduct(request, i=None):
    try:
        product = Product.objects.get(id=i)
        products_json = {
            'id': product.id,
            'name': product.name
        }
        return JsonResponse(products_json, safe=False)
    except ObjectDoesNotExist:
        error_json = {
            'error': 'Category not found'
        }
        return JsonResponse(error_json, status=404)
    except Exception as e:
        error_json = {
            'error': str(e)
        }
        return JsonResponse(error_json, status=500)



def filterByCategory(request, i=None):
    try:
        category = Category.objects.get(id=i)
        products = Product.objects.filter(category=category.name)
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except ObjectDoesNotExist:
        error_json = {
            'error': 'Category not found'
        }
        return JsonResponse(error_json, status=404)
    except Exception as e:
        error_json = {
            'error': str(e)
        }
        return JsonResponse(error_json, status=500)


def listCategories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def getCategory(request, i=None):
    try:
        category = Category.objects.get(id=i)
        category_json = {
            'id': category.id,
            'name': category.name
        }
        return JsonResponse(category_json, safe=False)
    except ObjectDoesNotExist:
        error_json = {
            'error': 'Category not found'
        }
        return JsonResponse(error_json, status=404)
    except Exception as e:
        error_json = {
            'error': str(e)
        }
        return JsonResponse(error_json, status=500)
