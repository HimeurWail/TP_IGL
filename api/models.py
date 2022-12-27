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

def upload_path(instance, filename):
    return '/'.join(['announcesImg', str(instance.announceCode), filename])

class Announce(models.Model):
    announceCode = models.CharField(max_length = 10, default=generate_unique_code, unique=True)
    category = models.CharField(null=False)
    type = models.CharField(null=False)
    title = models.CharField(null=False)
    description = models.CharField(null=False)
    price = models.IntegerField(null=False)
    surface = models.IntegerField(null=False)
    willaya = models.CharField(null=False)
    commune = models.CharField(null=False)
    adress = models.CharField(null=False)
    userContacts = models.CharField(null=False) 
    userId = models.CharField(null=False, unique=True)
    createdAt = models.DateField(auto_now_add = True)

# Create your models here.
class AnnounceImg(models.Model):
    announceCode = models.CharField(max_length = 10)
    imgFile = models.ImageField(blank=True, null=True, upload_to = upload_path)