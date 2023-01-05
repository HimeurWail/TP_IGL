from rest_framework import status, generics
from .models import Announce, AnnounceImg
from django.http import HttpResponse
from .serialisers import AnnounceImgSerializer, AnnounceSerializer, CreateAnnounceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class CreatAnnounceImg(APIView):
    queryset = AnnounceImg.objects.all()
    serializer_class = AnnounceImgSerializer
    def post(self, request, *args, **kwargs):
        """serializer = self.serializer_class(data=request.data)
        if(serializer.is_valid()):"""
        code = request.data['code']
        imgFile =  request.data['imgFile']
        AnnounceImg.objects.create(announceCode=code, imgFile=imgFile)
        return HttpResponse({'message': 'images well saved'}, status=status.HTTP_200_OK)

class GetAnnounceImg(APIView):
    serializer_class = AnnounceImgSerializer
    lookup_url_kwarg = 'code'
    def get(self, request, *args, **kwargs):
        code = request.GET.get(self.lookup_url_kwarg)  
        imgObjects = AnnounceImg.objects.filter(announceCode=code)
        if len(imgObjects)>0:
            imgFiles = []
            for img in imgObjects:
                imgFiles.append(self.serializer_class(img).data.get('imgFile'))
            return Response(imgFiles, status=status.HTTP_200_OK)
        return HttpResponse({'message': 'images not found'}, status=status.HTTP_404_NOT_FOUND)

class SaveAnnounce(APIView):
    serializer_class = CreateAnnounceSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            category = serializer.data.get('category')
            type = serializer.data.get('type')
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            price = serializer.data.get('price')
            surface = serializer.data.get('surface')
            willaya = serializer.data.get('willaya')
            commune = serializer.data.get('commune')
            adress = serializer.data.get('adress')
            userContacts = serializer.data.get('userContacts')
            userId = serializer.data.get('userId')
            announce = Announce.objects.create(
             category=category,
             type=type,
             title=title,
             description=description,
             price=price,
             surface=surface,
             willaya=willaya,
             commune=commune,
             adress=adress,
             userContacts=userContacts,
             userId=userId
             )
            return Response({'announceCode': announce.announceCode}, status=status.HTTP_200_OK)
        return HttpResponse({'msg': 'invalid data'}, status=status.HTTP_400_BAD_REQUEST)

class AnnounceView(generics.ListAPIView):
    queryset = Announce.objects.all()
    serializer_class=AnnounceSerializer
            
            