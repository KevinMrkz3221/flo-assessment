from rest_framework import viewsets

from .serializer import ProductSerializer, Product
# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()