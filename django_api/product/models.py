from django.db import models
from django.http import HttpResponse
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator


from task.models import Task
# Create your models here.

class Product(models.Model):
    id_api = models.IntegerField(unique=True)
    title = models.CharField(max_length=200)
    price = models.FloatField(validators=[MinValueValidator(1)])
    description = models.TextField()
    image = models.CharField(max_length=400)

    def clean(self):
        if len(self.title) <= 10:
            raise ValidationError("El título debe tener más de 10 caracteres.")

    def save(self, *args, **kwargs):
        try:
            self.full_clean()
            super().save(*args, **kwargs)
        except ValidationError as e:
            # Imprime "fail" sin mostrar el mensaje de error específico
            print("fail")
            # Retorna un HttpResponse con código 400 en caso de error de validación




class ProductAndTask(models.Model):
    product = models.ForeignKey(Product, on_delete= models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)