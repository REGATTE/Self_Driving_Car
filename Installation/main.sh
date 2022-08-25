#! /bin/sh

sudo apt-get update

# installs, if not already installed
sudo apt-get install git
sudo apt-get install curl
sudo apt-get install python3-pip

if [[ $(uname -m) == "aarch64" ]]; then
    sudo apt-get install rpi.gpio
fi

sudo sh Installation/ROS2.sh

sudo pip3 install -r Installation/requirements.txt
