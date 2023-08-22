from django.contrib import admin
from .models import Stud


class StudAdmin(admin.ModelAdmin):
    filesets = [
        (None, {"fields": ["id", "name"]}),
    ]
    list_display = ["id", "name", "email", "phone", "dob", "gender", "gpa", "level", "dept", "status"]
    list_filter = ["id", "level", "dept", "status"]
    search_fields = ["id", "name"]


admin.site.register(Stud, StudAdmin)
