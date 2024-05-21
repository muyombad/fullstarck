# accounts/urls.py

from django.urls import path
#from rest_framework.routers import DefaultRouter
from . import views 

#router = DefaultRouter()
#router.register(r'account-holders', AccountHolderViewSet)

#urlpatterns = [
 #   path('', include(router.urls)),

#]

urlpatterns = [
    path('api/account-holders/', views.account_holder_list, name='account_holder_list'),
    path('api/account-holders/<int:pk>/', views.account_holder_detail, name='account_holder_detail'),
]