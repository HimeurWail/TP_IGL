from rest_framework import status, generics
from .models import Announce, AnnounceImg
from django.http import HttpResponse
from .serialisers import AnnounceImgSerializer, AnnounceSerializer, CreateAnnounceSerializer, AnnounceCardSerializer
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

class GetRecentAnnounce(APIView):
    queryset = Announce.objects.all()
    serializer_class=AnnounceCardSerializer

    def get(self, request, *args, **kwargs):
        data = Announce.objects.all().order_by('-createdAt')
        if len(data)>0 :
            announces = []
            cpt = 0
            for announce in data:
                listing = self.serializer_class(announce).data
                imgUrls = AnnounceImg.objects.filter(announceCode = listing.get('announceCode'))
                if len(imgUrls)>0:
                    listing.update({'imgURL': AnnounceImgSerializer(imgUrls[0]).data.get('imgFile')})
                else:
                    listing.update({'imgURL': 'default'})
                announces.append(listing)
                cpt = cpt+1
                if cpt == 20:
                    break
            return Response(announces, status=status.HTTP_200_OK)
        return HttpResponse({'msg': 'aucune annonce trouvée'}, status=status.HTTP_411_LENGTH_REQUIRED)
        
class SearchAnnounce(APIView):
    queryset = Announce.objects.all()
    def post(self, request, *args, **kwargs):
        title = request.data.get('title').split()
        announces = []
        for announce in self.queryset.all().order_by('-createdAt'):
            for mot in title :
                if mot in AnnounceSerializer(announce).data.get('title') or mot in AnnounceSerializer(announce).data.get('description'):
                    listing = AnnounceCardSerializer(announce).data
                    imgUrls = AnnounceImg.objects.filter(announceCode = listing.get('announceCode'))
                    if len(imgUrls)>0:
                        listing.update({'imgURL': AnnounceImgSerializer(imgUrls[0]).data.get('imgFile')})
                    else:
                        listing.update({'imgURL': 'default'})
                    announces.append(listing)
                    break
        return Response(announces, status=status.HTTP_200_OK)

class GetAnnounce(APIView):
    serializer_class = AnnounceSerializer
    lookup_url_kwarg = 'code'
    def get(self, request, *args, **kwargs):
        code = request.GET.get(self.lookup_url_kwarg)  
        announce = Announce.objects.filter(announceCode=code)
        if len(announce) > 0:
            return Response(self.serializer_class(announce[0]).data, status=status.HTTP_200_OK)
        return HttpResponse({"msg": "announce not found"}, status=status.HTTP_404_NOT_FOUND)

class GetUserAnnounces(APIView):
    serializer_class = AnnounceCardSerializer
    lookup_url_kwarg = 'user'

    def get(self, request, *args, **kwargs):
        userName = request.GET.get(self.lookup_url_kwarg)
        data = Announce.objects.filter(userId=userName)
        if len(data)>0:
            announces = []
            for announce in data:
                listing = self.serializer_class(announce).data
                imgUrls = AnnounceImg.objects.filter(announceCode = listing.get('announceCode'))
                if len(imgUrls)>0:
                    listing.update({'imgURL': AnnounceImgSerializer(imgUrls[0]).data.get('imgFile')})
                else:
                    listing.update({'imgURL': 'default'})
                announces.append(listing)
            return Response(announces, status=status.HTTP_200_OK)
        return HttpResponse({'msg': 'aucune annonce trouvée'}, status=status.HTTP_411_LENGTH_REQUIRED)