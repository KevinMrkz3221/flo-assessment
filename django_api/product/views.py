from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializer import ProductSerializer, Product, ProductAndTaskSerializer, ProductAndTask
# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def destroy(self, request, *args, **kwargs):
        return Response({"detail": "No está permitido eliminar este objeto."}, status=status.HTTP_403_FORBIDDEN)
    
class ProductAndTaskViewSet(viewsets.ModelViewSet):
    serializer_class = ProductAndTaskSerializer
    queryset = ProductAndTask.objects.all()

    def create(self, request, *args, **kwargs):
        # Asegúrate de que 'product' está presente en request.data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        # Asegúrate de que 'product_id' se está pasando correctamente
        serializer.save()

    