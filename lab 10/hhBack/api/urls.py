from django.urls import path

from api.views import *

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view()),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancies),

    # path('companies/', company_list),
    # path('companies/<int:company_id>/', company_detail),
    # path('vacancies/', vacancy_list),
    # path('vacancies/<int:id>/', vacancy_detail),
    # path('vacancies/top_ten/', top_ten_vacancies)
]
