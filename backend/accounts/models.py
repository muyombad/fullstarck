

from django.db import models

class AccountHolder(models.Model):
    account_number = models.CharField(max_length=20, unique=True)
    account_name = models.CharField(max_length=100)
    available_balance = models.DecimalField(max_digits=10, decimal_places=2)
    profile = models.CharField(max_length=255)
    address = models.TextField()
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    fingerprint = models.BinaryField()

    def __str__(self):
        return self.email
