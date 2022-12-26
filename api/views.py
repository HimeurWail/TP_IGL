from rest_framework import status
from .models import AnnounceImg
from django.http import HttpResponse
from .serialisers import AnnounceImgSerializer, AnnounceSerializer
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
