#!/bin/bash

# iterate over "packages" directory, cd into each package and run "bun link" for each package and then cd out of the path

for package in packages/*; do
	echo "[...] Linking $package to bun"
	cd $package
	# the package is "dir/packagedir", so the package_name is "@local101/packagedir" as I like to keep the package name like that
	package_name=$(echo $package | cut -d'/' -f2)
	bun link "@local101/$package_name"
	cd ../..
	echo "[+] Done linking $package to bun"
done
