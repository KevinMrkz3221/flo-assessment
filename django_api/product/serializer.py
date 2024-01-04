from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate_title(self, value):
        if len(value) <= 10:
            raise serializers.ValidationError("El título debe tener más de 10 caracteres.")
        return value
