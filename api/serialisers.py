from rest_framework import serializers
from .models import AnnounceImg
from .models import Announce, AnnounceImg

class CreateAnnounceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announce
        fields = ('category', 'type', 'title', 'description', 'price', 'surface', 'willaya', 'commune', 'adress', 'userContacts', 'userId')

class AnnounceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announce
        fields = ('announceCode', 'category', 'type', 'title', 'description', 'price', 'surface', 'willaya', 'commune', 'adress', 'userContacts', 'userId', 'createdAt')

class AnnounceImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnnounceImg
        fields = ('announceCode', 'imgFile')