# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('uname', models.CharField(max_length=200)),
                ('pwd', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('fname', models.CharField(max_length=200)),
                ('lname', models.CharField(max_length=200)),
                ('bdate', models.DateField(max_length=200)),
                ('utype', models.CharField(max_length=200)),
            ],
        ),
    ]
