from django.db import models
import string
import random


def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break

    return code


class Room(models.Model):
    code = models.CharField(
        max_length=8, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    current_song = models.CharField(max_length=50, null=True)


def generate_unique_uid():
    length = 28

    while True:
        uid = ''.join(random.choices(string.ascii_letters, k=length))
        if User.objects.filter(uid=uid).count() == 0:
            break

    return uid


class User(models.Model):
    uid = models.CharField(
        max_length=30, default=generate_unique_uid, unique=True)
    host = models.CharField(max_length=50, unique=True)
    role = models.CharField(max_length=50, null=False, default="customer")
    username = models.CharField(max_length=50, null=False, default="user")
    email = models.CharField(max_length=50, default="email", unique=True)
    password = models.CharField(max_length=50, null=False, default="12345678")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=False, null=True)
