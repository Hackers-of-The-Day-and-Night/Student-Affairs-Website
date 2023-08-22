from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from .models import Stud
import json


def index(request):
  return render(request, 'manage_studs/index.html')


def view_studs(request):
  entry = request.GET.get('search', '')
  return render(request, 'manage_studs/view.html', {'list_studs': list(Stud.objects.values('id', 'name', 'email', 'phone', 'status').filter(name__contains=entry).order_by('id'))})


def nav(request):
  return render(request, 'manage_studs/nav.html')


def edit_stud(request, stud_id):
  stud = get_object_or_404(Stud, pk=stud_id)
  if request.method == 'POST':
    try:
      id = request.POST['id']
      try:
        Stud.objects.get(id=id)
        if id != stud.id:
          msg = "Student with ID: " + id + " already exists."
          return render(request, 'manage_studs/edit.html', {'stud': stud, 'error_msg': msg})
      except Stud.DoesNotExist:
        pass
      stud.name = request.POST['name']
      try:
        tmp_stud = Stud.objects.get(email=request.POST['email'])
        if (tmp_stud.email != stud.email):
          msg = "Email used before."
          return render(request, 'manage_studs/edit.html', {'stud': stud, 'error_msg': msg})
      except Stud.DoesNotExist:
        stud.email = request.POST['email']
      try:
        tmp_stud = Stud.objects.get(phone=request.POST['phone'])
        if (tmp_stud.phone != stud.phone):
          msg = "Phone number used before."
          return render(request, 'manage_studs/edit.html', {'stud': stud, 'error_msg': msg})
      except Stud.DoesNotExist:
        stud.phone = request.POST['phone']
      stud.dob = request.POST['dob']
      stud.gender = request.POST['gender']
      stud.gpa = request.POST['gpa']
      stud.level = request.POST['level']
      stud.status = request.POST['status']
    except (KeyError, Stud.DoesNotExist):
      return render(request, 'manage_studs/view.html')
    else:
      if id != stud.id:
        stud.delete()
        stud.id = id
      stud.save()
      return HttpResponseRedirect(reverse("manage_studs:edit_stud", args=(id,)))
  else:
    return render(request, 'manage_studs/edit.html', {'stud': stud, 'error_msg': ''})


def add_stud(request):
  stud = Stud()
  if request.method == 'POST':
    stud.id = request.POST['id']
    stud.name = request.POST['name']
    stud.email = request.POST['email']
    stud.phone = request.POST['phone']
    stud.dob = request.POST['dob']
    stud.gender = request.POST['gender']
    stud.gpa = request.POST['gpa']
    stud.dept = request.POST['dept']
    stud.level = request.POST['level']
    stud.status = request.POST['status']
    try:
      Stud.objects.get(id=stud.id)
      msg = "Student with ID: " + stud.id + " already exists."
      return render(request, 'manage_studs/add.html', {'stud': stud, 'error_msg': msg})
    except Stud.DoesNotExist:
      pass
    try:
      tmp_stud = Stud.objects.get(email=request.POST['email'])
      msg = "Email used before."
      return render(request, 'manage_studs/add.html', {'stud': stud, 'error_msg': msg})
    except Stud.DoesNotExist:
      pass
    try:
      tmp_stud = Stud.objects.get(phone=request.POST['phone'])
      msg = "Phone number used before."
      return render(request, 'manage_studs/add.html', {'stud': stud, 'error_msg': msg})
    except Stud.DoesNotExist:
      pass
    stud.save()
    return HttpResponseRedirect(reverse("manage_studs:add_stud"))
  else:
    return render(request, 'manage_studs/add.html', {'stud': stud, 'error_msg': ''})


def delete_stud(request, stud_id):
  stud = get_object_or_404(Stud, pk=stud_id)
  stud.delete()
  return HttpResponseRedirect(reverse("manage_studs:view_studs"))


def change_status(request, stud_id):
  data = json.loads(request.body)
  stud = get_object_or_404(Stud, pk=data['id'])
  stud.status = data['status']
  stud.save()
  return JsonResponse({})


def search_all(request, entry):
  return JsonResponse({'list_studs': list(Stud.objects.values('id', 'name', 'email', 'phone', 'status').filter(name__contains=entry).order_by('id'))})


def search_active(request):
  entry = request.GET.get('search', '')
  return render(request, 'manage_studs/search_active.html', {'list_studs': list(Stud.objects.values('id', 'name').filter(name__contains=entry, status='active').order_by('id'))})


def assign_department(request, stud_id):
  stud = get_object_or_404(Stud, pk=stud_id)
  if request.method == 'POST':
    data = json.loads(request.body)
    stud.dept = data['dept'].lower()
    stud.save()
    return JsonResponse({})
  else:
    return render(request, 'manage_studs/assign_department.html', {'stud': stud})
