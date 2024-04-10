import random

from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from api.Serializers import CompanySerializer, VacancySerializer


def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'message': 'The company does not exist'}, status=404)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)


def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'message': 'The company does not exist'}, status=404)

    if request.method == 'GET':
        vacancies = company.vacancy_set.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'message': 'The vacancy does not exist'}, status=404)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def addVacancies():
    for i in range(10):
        Vacancy.objects.create(
            company_id=1,
            name=f'Vacancy {i}',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            salary=random.randint(100000, 1000000)
        )
    for i in range(11, 20):
        Vacancy.objects.create(
            company_id=2,
            name=f'Vacancy {i}',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            salary=random.randint(100000, 1000000)
        )
    for i in range(21, 30):
        Vacancy.objects.create(
            company_id=3,
            name=f'Vacancy {i}',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            salary=random.randint(100000, 1000000)
        )
