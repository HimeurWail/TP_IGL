# Generated by Django 4.0.3 on 2023-02-03 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_announce'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announce',
            name='userId',
            field=models.CharField(max_length=60),
        ),
    ]
