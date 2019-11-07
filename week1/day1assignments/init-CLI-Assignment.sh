#!/bin/bash

echo "Creating Directories"
mkdir ~/Documents/Projects
cd ~/Documents/Projects
mkdir Assignment-CLI
cd Assignment-CLI
mkdir Version-1
mkdir Version-2
echo ""

echo "Creating Version-1 files"
touch Version-1/index.html
touch Version-1/contact-us.html
touch Version-1/services.html
touch Version-1/about-us.html
echo ""

echo "Creating Version-2 files in Version-1"
touch Version-1/index-2.html
touch Version-1/services-2.html
echo ""

echo "Listing Version-1 contents"
ls Version-1
echo ""

echo "Listing Version-2 contents"
ls Version-2
echo ""

echo "Moving Version-2 files"
mv Version-1/index-2.html Version-2
mv Version-1/services-2.html Version-2
echo ""

echo "Listing Version-1 contents"
ls Version-1
echo ""
echo "Listing Version-2 contents"
ls Version-2
echo ""

if [ "$1" = "-code" ]; then
echo "Searching for self and printing script"
echo ""
find ~/ -name "init-CLI-Assignment.sh" 2>/dev/null -exec cat {} \;
echo ""
fi

echo "Would you like to DELETE Projects directory? (Y/n): " 
read ans
if [ "$ans" = "Y" ]; then
   echo "Deleting Projects directory"
   cd ~/Documents
   rm -rf Projects
   ls ~/Documents
else
   echo "Projects directory is safe...for now"
   ls ~/Documents
fi
