from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AccountHolderViewSet

router = DefaultRouter()
router.register(r'account-holders', AccountHolderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
