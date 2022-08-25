!#/usr/bin/env bash

sudo apt-get update

# installs, if not already installed
sudo apt-get install git
sudo apt-get install curl
sudo apt-get install python3-pip

if [[ $(uname -m) == "aarch64" ]]; then
    sudo apt-get install rpi.gpio

sudo bash Installation/ROS2.bash

sudo pip3 install -r Installation/requirements.txt
