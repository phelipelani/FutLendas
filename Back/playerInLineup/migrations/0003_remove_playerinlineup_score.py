# Generated by Django 4.2.6 on 2023-10-09 03:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playerInLineup', '0002_alter_playerinlineup_score'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playerinlineup',
            name='score',
        ),
    ]
