import random
import string
from django.db import models

def generate_unique_code():
    length = 10

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Announce.objects.filter(announceCode=code).count() == 0:
            break

    return code



class Announce(models.Model):
    announceCode = models.CharField(max_length = 10, default=generate_unique_code, unique=True)
    category = models.CharField(max_length=40, null=False)
    type = models.CharField(max_length=40, null=False)
    title = models.CharField(max_length=256, null=False)
    description = models.CharField(max_length=1000, null=False)
    price = models.IntegerField(null=False)
    surface = models.IntegerField(null=False)
    willaya = models.CharField(max_length=40, null=False)
    commune = models.CharField(max_length=40, null=False)
    adress = models.CharField(max_length=256, null=False)
    userContacts = models.CharField(max_length=1000, null=False) 
    userId = models.CharField(max_length=60, null=False)
    createdAt = models.DateField(auto_now_add = True) 

def upload_path(instance, filename):
    return '/'.join(['announcesImg', str(instance.announceCode), filename])

# Create your models here.
class AnnounceImg(models.Model):
    announceCode = models.CharField(max_length = 10)
    imgFile = models.ImageField(blank=True, null=True, upload_to = upload_path)

class Formulaire(models.Model):
    messagecode = models.CharField(max_length = 10, default=generate_unique_code, unique=True)
    senderEmail = models.CharField(max_length=60, null=False)
    message = models.CharField(max_length=1000, null=False)
    announceCode = models.CharField(max_length = 10, null=False)
    createdAt = models.DateField(auto_now_add = True)