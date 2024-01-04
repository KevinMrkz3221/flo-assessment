from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet, ProductAndTaskViewSet
router = routers.DefaultRouter()
router.register(r'products', ProductViewSet, 'products')
router.register(r'products-n-tasks', ProductAndTaskViewSet, 'products-n-tasks')

urlpatterns = [
    path('api/v1/', include(router.urls))
]