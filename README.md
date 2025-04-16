Multi-App Docker Compose Deployment with GitHub Actions CI/CD
-----------------------------------------------------------------
Project Overview

This project demonstrates a multi-container Node.js application setup using Docker Compose, deployed on AWS EC2 via a CI/CD pipeline configured with GitHub Actions.

📁 Directory Structure

 multi-app-project/
│
├── app1/                  # First Node.js application
├── app2/                  # Second Node.js application
├── nginx/                 # Reverse proxy setup (optional)
├── docker-compose.yaml    # Compose file to orchestrate services
└── .github/workflows/     # CI/CD configuration

Technologies Used

Docker & Docker Compose
GitHub Actions
AWS EC2
NGINX (optional reverse proxy)
Node.js (v18-slim)
SSH Action by Appleboy

CI/CD Pipeline Flow

Code is pushed to the main branch.
GitHub Actions workflow is triggered.
Docker images for app1 and app2 are built and pushed to DockerHub.
SSH into EC2 instance using appleboy/ssh-action.
Pulls latest code and spins up services using docker-compose.

Setup Instructions

1. Clone the Repository
git clone https://github.com/your-user/multi-app-project.git
cd multi-app-project

2. Docker Build & Compose (Locally)
docker-compose build
docker-compose up -d

3. GitHub Secrets Configuration
Add the following secrets in your GitHub repo:

Secret Key | Description
DOCKER_USERNAME | DockerHub username
DOCKER_PASSWORD | DockerHub password
EC2_HOST | Public IP of your EC2 instance
EC2_USER | EC2 username (e.g., ubuntu)
EC2_SSH_KEY | Private SSH key (base64 encoded)

----------------------------------------------------------------------

🐛 Issues Faced & Fixes

❌ failed to read dockerfile: open Dockerfile: no such file or directory
Cause: Dockerfile was missing inside app1/ directory in the main repo due to it being a Git submodule.

Fix:

Removed app1 as a submodule.
Re-added files directly under app1/.

----

❌ fatal: not a git repository
Cause: The EC2 instance was freshly launched and didn’t have the Git repo cloned.

Fix:

SSH’d into EC2.
Manually cloned the repo to /home/ubuntu/multi-app-project.

----

❌ Can't find a suitable configuration file in this directory
Cause: docker-compose.yaml was not found because the working directory on EC2 was incorrect.

Fix:

Updated GitHub Action cd script to the correct path:
cd /home/ubuntu/multi-app-project

✅ Successful Deployment Checklist

 GitHub Actions workflow triggers on push
 Docker images built and pushed to DockerHub
 EC2 SSH and Git pull successful
 docker-compose brings up services
 Application accessible via EC2 public IP or domain

 🧠 Lessons Learned

Always verify the working directory on the remote EC2 instance.
Be careful with submodules in GitHub Actions workflows.
Use --password-stdin for secure DockerHub login.
Set up SSH access properly for remote deployments.

----------------------------------------------------------------------------------------------------------

👤 Author

Ali — DevOps Engineer
✉️ ali.opstech@gmail.com
🚀 "The Best in the World" – Passionate about automation, scalable deployments, and cloud-native solutions.
"Delivering resilient infrastructure and continuous innovation through the power of DevOps."
