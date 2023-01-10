from django.urls import path
from .views import AnnounceView, CreatAnnounceImg, GetAnnounceImg, SaveAnnounce, GetRecentAnnounce, SearchAnnounce

urlpatterns = [
    path('saveimgs/', CreatAnnounceImg.as_view()),
    path('getimgs/', GetAnnounceImg.as_view()), 
    path('saveannounce/', SaveAnnounce.as_view()),
    path('announces/', AnnounceView.as_view()),
    path('recentannounces/', GetRecentAnnounce.as_view()),
    path('search/', SearchAnnounce.as_view())
]