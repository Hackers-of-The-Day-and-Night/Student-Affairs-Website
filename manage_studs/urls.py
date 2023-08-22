from django.urls import path
from . import views

app_name = 'manage_studs'
urlpatterns = [
    path('', views.index, name='index'),
    path('view/', views.view_studs, name='view_studs'),
    path('<int:stud_id>/edit/', views.edit_stud, name='edit_stud'),
    path('add/', views.add_stud, name='add_stud'),
    path('<int:stud_id>/delete/', views.delete_stud, name='delete_stud'),
    path('search_active/', views.search_active, name='search_active'),
    path('<int:stud_id>/assign_department/', views.assign_department, name='assign_department'),
    path('<int:stud_id>/status/', views.change_status, name='change_status'),
    path('<slug:entry>/search/', views.search_all, name='search_all')
]
