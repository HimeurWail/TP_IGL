# Generated by Django 4.1.2 on 2022-12-23 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_announceimg_announcecode'),
    ]

    operations = [
        migrations.RenameField(
            model_name='announceimg',
            old_name='imgFile',
            new_name='imgFiles',
        ),
        migrations.AlterField(
            model_name='announceimg',
            name='announceCode',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
