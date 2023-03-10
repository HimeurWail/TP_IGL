# Generated by Django 4.1.2 on 2022-12-22 20:13

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AnnounceImg',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('announceCode', models.CharField(max_length=10, unique=True)),
                ('imgFile', models.ImageField(blank=True, null=True, upload_to=api.models.upload_path)),
            ],
        ),
    ]
