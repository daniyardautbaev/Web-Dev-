from rest_framework import serializers
from api.models import Vacancy, Company


class VacancySerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())

    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']
