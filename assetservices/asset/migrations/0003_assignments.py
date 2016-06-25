# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0002_stocks'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignments',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('entity', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=200)),
                ('qty', models.CharField(max_length=200)),
                ('uid', models.CharField(max_length=200)),
                ('doa', models.DateField()),
                ('doe', models.DateField()),
            ],
        ),
    ]
