# Generated by Django 4.1.3 on 2022-11-30 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='author',
        ),
        migrations.AlterField(
            model_name='article',
            name='category',
            field=models.CharField(blank=True, choices=[('Breaking-News', 'Breaking-News'), ('Latest-News', 'Latest-News'), ('Local-News', 'Local-News'), ('Business-News', 'Business-News'), ('International-News', 'International-News'), ('Technology-News', 'Technology-News')], max_length=100, null=True),
        ),
    ]
