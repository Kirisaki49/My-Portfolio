from django.shortcuts import render

# Data proyek ditambahkan manual
projects_data = [
    {
        "title": "Proyek 1",
        "description": "Deskripsi proyek pertama.",
        "image": "path/to/image1.jpg",  # Sesuaikan path ini
        "created_at": "2023-01-01"
    },
    {
        "title": "Proyek 2",
        "description": "Deskripsi proyek kedua.",
        "image": "path/to/image2.jpg",  # Sesuaikan path ini
        "created_at": "2023-02-01"
    },
]

def project_list(request):
    context = {"projects": projects_data}
    return render(request, "projects/project_list.html", context)
