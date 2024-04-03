from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Products'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'name: {self.name}, price: {self.price},description: {self.description}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Categories'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'ID: {self.id}, Category name: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }
