from django.db import models

class Stud(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=11, unique=True)
    dob = models.DateField()
    gender = models.CharField(max_length=10)
    gpa = models.FloatField()
    level = models.IntegerField()
    dept = models.CharField(max_length=10)
    status = models.CharField(max_length=10)
