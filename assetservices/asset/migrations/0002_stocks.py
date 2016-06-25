# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='stocks',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('serial_no', models.CharField(max_length=200)),
                ('dop', models.DateField(max_length=200)),
                ('exp_date', models.DateField(max_length=200)),
                ('price', models.IntegerField(default=0)),
            ],
        ),
    ]
