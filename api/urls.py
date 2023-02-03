from django.urls import path
from .views import AnnounceView, CreatAnnounceImg, GetAnnounceImg, GetUserAnnounces, SaveAnnounce, GetRecentAnnounce, SearchAnnounce, GetAnnounce

urlpatterns = [
    path('saveimgs/', CreatAnnounceImg.as_view()),
    path('getimgs/', GetAnnounceImg.as_view()), 
    path('saveannounce/', SaveAnnounce.as_view()),
    path('announces/', AnnounceView.as_view()),
    path('userannounces/', GetUserAnnounces.as_view()),
    path('announce/', GetAnnounce.as_view()),
    path('recentannounces/', GetRecentAnnounce.as_view()),
    path('search/', SearchAnnounce.as_view())
]