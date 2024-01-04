from django.db import models

# Create your models here.
class Task(models.Model):
    created_at = models.DateTimeField(auto_now_add =True)
    title = models.CharField(max_length=200)
    description =models.TextField(blank=True)
    done = models.BooleanField(default=False)
    

    class Meta:
        db_table = 'task'
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'

    def __str__(self) -> str:
        return self.title