# Generated by Django 5.0 on 2023-12-29 06:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_alter_task_table'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='task',
            options={'verbose_name': 'Task', 'verbose_name_plural': 'Tasks'},
        ),
    ]
