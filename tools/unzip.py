from genericpath import isfile
import os
from os.path import isfile, join

from zipfile import ZipFile


def get_directories():
    directories = [f for f in os.listdir() if not isfile(f)]
    return directories

def get_zip_path(directory):
    zip_file = [join(directory, f) for f in os.listdir(directory) if isfile(join(directory, f))][0]
    return zip_file


directories = get_directories()
zip_paths = []

for directory in directories:
    zip_path = get_zip_path(directory)
    zip_paths.append(zip_path)

for zip_path in zip_paths:
    with ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(zip_path.split("/")[0])
