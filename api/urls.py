from django.urls import path
from .views import CreatAnnounceImg, GetAnnounceImg

urlpatterns = [
    path('saveimgs/', CreatAnnounceImg.as_view()),
    path('getimgs/', GetAnnounceImg.as_view())
]