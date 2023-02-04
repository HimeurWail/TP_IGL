from rest_framework import serializers
from .models import AnnounceImg, Formulaire
from .models import Announce, AnnounceImg

class CreateAnnounceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announce
        fields = ('category', 'type', 'title', 'description', 'price', 'surface', 'willaya', 'commune', 'adress', 'userContacts', 'userId')

class AnnounceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announce
        fields = ('announceCode', 'category', 'type', 'title', 'description', 'price', 'surface', 'willaya', 'commune', 'adress', 'userContacts', 'userId', 'createdAt')

class AnnounceCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announce
        fields = ('announceCode', 'category', 'type', 'price', 'surface', 'willaya', 'createdAt')

class AnnounceImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnnounceImg
        fields = ('announceCode', 'imgFile')

class AnnounceImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnnounceImg
        fields = ('announceCode', 'imgFile')

class CreatFormulaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formulaire
        fields = ('announceCode', 'senderEmail', 'message')