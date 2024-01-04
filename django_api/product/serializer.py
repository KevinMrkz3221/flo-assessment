from rest_framework import serializers
from .models import Product, ProductAndTask
from task.serializer import TaskSerializer
from task.models import Task
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate_title(self, value):
        if len(value) <= 10:
            raise serializers.ValidationError("El título debe tener más de 10 caracteres.")
        return value
    
    def delete(self, instance):
        pass

class ProductAndTaskSerializer(serializers.ModelSerializer):

    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    task = serializers.PrimaryKeyRelatedField(queryset=Task.objects.all())

    class Meta:
        model = ProductAndTask
        fields = ('product', 'task')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['product'] = ProductSerializer(instance.product).data
        representation['task'] = TaskSerializer(instance.task).data
        return representation
