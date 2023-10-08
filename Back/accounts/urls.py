from django.urls import path
from .views import AccountView

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [path("accounts/", AccountView.as_view())]
urlpatterns = [path("accounts/login/", TokenObtainPairView.as_view())]
urlpatterns = [path("accounts/login/refresh", TokenRefreshView.as_view())]
