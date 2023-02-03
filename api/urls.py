from django.urls import path
from .views import AnnounceView, CreatAnnounceImg, GetAnnounceImg, SaveAnnounce, GetRecentAnnounce , SearchAnnounce, SendMessage,GetMessages

urlpatterns = [
    path('saveimgs/', CreatAnnounceImg.as_view()),
    path('getimgs/', GetAnnounceImg.as_view()), 
    path('saveannounce/', SaveAnnounce.as_view()),
    path('announces/', AnnounceView.as_view()),
    path('recentannounces/', GetRecentAnnounce.as_view()),
    path('search/', SearchAnnounce.as_view()),
    path('sendmessage/', SendMessage.as_view()),
    path('getmessages/', GetMessages.as_view()),
]

# hadi documentation brk a wail

# api 7 : 
#     url : http://localhost:8000/api/v1/sendmessage/
#     method : POST
#     body : {
#         "email": "email",  
#         "message": "message",   
#         "announcecode": "announcecode"
#     }
#     response : {
#         "message": "message well saved"
#     }
#     response : {
#         "message": "message not saved"
#     }
#     response : {
#         "message": "missing data"
#     }
# api 8 :
#     url : http://localhost:8000/api/v1/getmessages/
#     method : POST
#     body : {
#         "email": "email"
#     }
#     response : [
#     {
#         "senderEmail": "email",
#         "message": "message",
#         "announceCode": "announcecode"
#     }
#     ]
#     response : {
#         "message": "missing data"
#     }