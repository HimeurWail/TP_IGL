from rest_framework import serializers
from .models import Announce, AnnounceImg

class AnnounceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announce
        fields = ('announceCode', 'category', 'type', 'title', 'description', 'price', 'surface', 'willaya', 'commune', 'adress', 'userContacts', 'userId', 'createdAt')

class AnnounceImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnnounceImg
        fields = ('announceCode', 'imgFile')