from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length=120)
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=70)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.name
