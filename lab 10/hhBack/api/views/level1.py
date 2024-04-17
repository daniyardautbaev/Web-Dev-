import json
import random

from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from api.Serializers import CompanySerializer, VacancySerializer


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': 1})


@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist:
        return JsonResponse({'message': 'The company does not exist'}, status=404)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_name = data.get("name")
        company.name = new_name
        company.save()
        return JsonResponse(company.to_json(), safe=False)

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"ok": 1}, safe=False)


@csrf_exempt
def company_vacancies(request, company_id):
    # try:
    #     company = Company.objects.get(id=company_id)
    # except Company.DoesNotExist:
    #     return JsonResponse({'message': 'The company does not exist'}, status=404)

    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company_id)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse({'error': 1}, safe=False)

@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'message': 'The vacancy does not exist'}, status=404)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_name = data.get("name")
        vacancy.name = new_name
        vacancy.save()
        return JsonResponse(vacancy.to_json(), safe=False)

    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({"ok": 1}, safe=False)


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def addVacancies():
    for i in range(10):
        Vacancy.objects.create(
            company_id=14,
            name=f'Vacancy {i}',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            salary=random.randint(100000, 1000000)
        )
    for i in range(11, 20):
        Vacancy.objects.create(
            company_id=15,
            name=f'Vacancy {i}',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            salary=random.randint(100000, 1000000)
        )
    for i in range(21, 30):
        Vacancy.objects.create(
            company_id=16,
            name=f'Vacancy {i}',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            salary=random.randint(100000, 1000000)
        )
